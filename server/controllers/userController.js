var bcrypt = require('bcrypt');
var Model = require('../models/models.js');
var SFAPI = require('../SFAPICalls.js')
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');

/**
 * GET /users
 *
 * Returns all users from Users table.
 */
module.exports.getUsers = function(req, res, next) {

  Model.User.findAll()
    .then(users => {
      res.status(200).json({users, 'type': 'success', message: 'success'});
    })
    .catch(err => {
      res.status(500).json({ 'type': 'user creation', message: err });
    })
}

/**
 * GET /users/userId/:user_id
 *
 * Returns user by id, if exists
 */
module.exports.getUser = function(req, res, next) {

  Model.User.findById(req.params.user_id)
    .then(user => {
      
      // Respond with user data (just from our DB right now)
      res.status(200).json({user, 'type': 'success', message: 'success'});
    })
    .catch(err => {
      res.status(400).json({ 'type': 'user lookup', message: err });

    })
}

/**
 * POST /users
 *
 * Takes form data (username, password) from /signup page and creates a new user in Users table after some simple validation.
 */
module.exports.postUsers = function(req, res, next) {

  let email = req.body.email;
  let password = req.body.password;
  let password2 = req.body.password_conf;

  if (!email || !password || !password2) {
    res.status(400).json({ 'type': 'missing information', message: 'All required fields not filled out.' });
  }

  if (password !== password2) {
    res.status(400).json({ 'type': 'validation error', message: 'Passwords dont match!' });
  }

  let salt = bcrypt.genSaltSync(10)
  let hashedPassword = bcrypt.hashSync(password, salt)

  let newUser = {
    uuid: "", // we will use Salesforce ID
    email: email,
    salt: salt,
    password: hashedPassword,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    amount_raised: 0,
    goal: req.body.goal,
    about: req.body.about,
    team_uuid: null,
    admin_level: 3
  }
  
  let newSFUser = {
    Email: email,
    FirstName: req.body.first_name,
    LastName: req.body.last_name, 
    Preferred_name__c: "",
    Birthdate: "12/25/2000",
    Ethnicity__c: "",
    // RT_Site_Active__c: "",
    RT_Site_ID__c: "",
    // Graduation_Date__c: "",
    Skype_ID__c: "",
    Phone: "",
    Facebook_URL__c: "",
    MailingStreet: "",
    MailingCity: "",
    MailingState: "",
    MailingPostalCode: "",
    MailingCountry: ""
  }
  
  // Create SF new user, get SF user id, and create new RT user callback
  SFAPI.performRequest('user', 'POST', newSFUser,
    function(data) {
    
    console.log(data.id)
    newUser.salesforce_id = data.id
    
    Model.User.create(newUser)
      .then(user => {
        let token = jwt.sign({ username: user.username, team_uuid: user.team_uuid }, 'secrettoken', { expiresIn: 86400});
        res.status(201).json({token : token, 'type': 'success', message: 'success'});
      })
      .catch(err => {
        // Add some more error handling for different user creation errors here.
        // Default error message - send everything
        console.log(err);
        res.status(400).json({ 'type': 'error', message: err });
    })
  })
}

/**
 * PUT /users/userId/:user_id
 *
 * Update specific user based on user_id
 */
module.exports.putUser = function(req, res, next) {

  let first_name = req.body.first_name
  let last_name = req.body.last_name
  let username = req.body.username
  let goal = req.body.goal
  let about = req.body.about
  let team_uuid = req.body.team_uuid

  // Two nested callbacks here:
  // 1) Sequelize finds user by user_id
  // 2) First callback - which then executes the
  // Salesforce PUT based off the salesforce_id
  // 3) Second callback - which then executes
  // the actual RT user update
  Model.User.findById(req.params.user_id)
    .then(user => {
  
    SFAPI.performRequest('user', 'PUT', 
      {
        id: user.salesforce_id,
        FirstName: first_name,
        LastName: last_name
      },
      function(data) {
        
      console.log("Updated user in SF: " + data)
      
      // Default sequelize behavior is to fill the field as blank string if no data passed
      Model.User.update(
      {
        first_name: first_name,
        last_name: last_name,
        username: username,
        goal: goal,
        about: about,
        team_uuid: team_uuid
      },
      {
        where: { uuid: req.params.user_id }
      })
      .then(user => {
       
        let token = jwt.sign({ username: req.body.username, team_uuid: req.body.team_uuid }, 'secrettoken', { expiresIn: 86400});
        res.status(201).json({token: token, user, 'type': 'success', message: 'successfully updated user'});
       
      })
      .catch(err => {
        res.status(400).json({ 'type': 'error', message: err });
      })      
    })
  })
  .catch(err => {
    res.status(400).json({ 'type': 'user lookup', message: err });
  })
}

/**
 * DELETE /users/userId/:user_id
 *
 * Delete specific user based on user_id.
 * NOTE: This currently only deletes from our local psql DB, 
 * NOT from LiNK Salesforce API.
 */
module.exports.deleteUser = function(req, res, next) {

  Model.User.destroy(
  {
    where: { uuid: req.params.user_id }
  })
  .then( uuid => {
    res.status(201).json({uuid, 'type': 'success', message: 'successfully deleted user from RTP-DB' });
  })
  .catch( err => {
    res.status(400).json({ 'type': 'error', message: err });
  })

}

/**
 * POST /users/:username/:team_id
 *
 * Adds team foreign key to user based on username
 */
module.exports.updateUserTeamKey = function(req, res, next) {

  let team_id = req.params.team_id
  
  // Find user based on username and add team_id as fk
  Model.User.update(
  {
    team_uuid: team_id
  },
  {
    where: { username: req.params.username }
  })
  .then( users_affected => {
    res.status(201).json({users_affected, 'type': 'success', message: 'successfully updated user'});
  })
  .catch( err => {
    res.status(400).json({ 'type': 'error', message: err });
  })
}

/**
 * POST /teams (called from postTeams method to update user/team ID)
 * 
 * Updates User's Team and Admin Level
 */
module.exports.updateUserTeam = function (req, res, next) {


  Model.User.find({ where: { username: req.leader } })
  .then(user => {
    Model.User.update({
      team_uuid: req.uuid,
      admin_level: 2
    },
    {
      where: { username: req.leader }
    })
    .then(updated_user => {
      console.log(req.team_name);
      console.log(req.username);

      let token = jwt.sign({ 
        username: updated_user.username, 
        first_name: updated_user.first_name, 
        last_name: updated_user.last_name,
        admin_level: 2, 
        team_uuid: req.uuid,
        team_username: req.username  
      }, 
        'secrettoken', { expiresIn: 86400});


        res.status(201).json({token: token, 'type': 'success', message: "successfully updated user's team"});
      }).catch(error => {
      console.log(error);
      res.status(400).json({ 'type': 'error', message: error });
    });
  })
  .catch(error => {
    console.log(error);
    res.status(400).json({ 'type': 'error', message: error });
  });


}

/**
 * GET /users/username/:username
 *
 * Returns user by username, if exists
 */
module.exports.getUserByUsername = function (req, res, next) {
  
 Model.User.find({ where: { username: req.params.username } })
    .then(user => {
      console.log(user.username);
      if (user && user.username != null) {
        res.status(201).json({  
          user: {
                  username: user.username,
                  first_name: user.first_name,
                  last_name: user.last_name,
                  email: user.email,
                  uuid: user.uuid,
                  amount_raised: user.amount_raised,
                  goal: user.goal,
                  about: user.about,
                  admin_level: user.admin_level,
                  team_uuid: user.team_uuid
                },
          'type': 'success',
          message: 'Successfully retrieved user'});

      } else {
        res.status(400).json({ 'type': 'error', message: 'No such user!' });
      }

    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ 'type': 'error', message: "User Not Found" });
    });
}
 
/**
 * GET /users/team/teamId/:team_id
 *
 * Returns users on a specific team by team_id
 */
module.exports.getUsersByTeam = function(req, res, next) {
   console.log("checkin team id: " + req.uuid);
  let team_id = req.uuid

  Model.User.findAll({ 
    where: {
      team_uuid: team_id
    }
  })
  .then( users => {
    res.status(201).json({   
      team: req,       
      users: users,
      'type': 'success',
      message: 'Successfully retrieved users'});
  })
  .catch( err => {
    res.status(400).json({ 'type': 'error', message: "Users or Team ID Not Valid" });
  });
  
}
