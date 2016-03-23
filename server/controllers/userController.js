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
  let salt = bcrypt.genSaltSync(10);
  let hashedPassword = bcrypt.hashSync(password, salt);

  let newUser = {
    uuid: "", // get this from Salesforce ID
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
  
  // Email and Password Validations
  if (!email || !password || !password2) {
    res.status(400).json({ 'type': 'missing information', message: 'All required fields not filled out.' });
  }

  if (password !== password2) {
    res.status(400).json({ 'type': 'validation error', message: 'Passwords dont match!' });
  }
  
  // Check if user email or username already exist in RT DB
  Model.User.count({
    where: {
      $or: [{ email: email }, { username: req.body.username }]
    }
  })
  .then(function(results) {
    
    console.log("Duplicate results: " + results)
    if(results > 0)
    {
      res.status(400).json({ 'type': 'Dupe error', message: 'Username or email already exists in RT DB' });
    }
    else 
    {
      // Create SF new user, get SF user id, and create new RT user callback
      SFAPI.performRequest('user', 'POST', newSFUser,
        function(data) {
        
        console.log("Creating new user with uuid: " + data.id)
        newUser.uuid = data.id
        
        Model.User.create(newUser)
          .then(user => {
            let token = jwt.sign({ username: user.username }, 'secrettoken', { expiresIn: 86400});
            res.status(201).json({token : token, 'type': 'success', message: 'success'});
          })
          .catch(err => {
            // Default error message - send everything
            console.log(err);
            res.status(400).json({ 'type': 'error', message: err });
          })
      })
    }
  })
  
    
}

/**
 * PUT /users/userId/:user_id
 *
 * Update specific user based on user_id
 */
module.exports.putUser = function(req, res, next) {

  // Update RT user table first, then
  // update Salesforce, catches for both

  // Default sequelize behavior is to fill the field as blank string if no data passed
  Model.User.update(
  {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    goal: req.body.goal,
    about: req.body.about
  },
  {
    where: { uuid: req.params.user_id }
  })
  .then(user => {
    console.log("RT DB result: " + user.rows)
    SFAPI.performRequest('user', 'PUT', 
    {
      id: req.params.user_id,
      FirstName: req.body.first_name,
      LastName: req.body.last_name
    },
    function(data) {
      let token = jwt.sign({ username: req.body.username }, 'secrettoken', { expiresIn: 86400});
      console.log("Token signed!")
      res.status(201).json({token: token, 'type': 'success', message: 'successfully updated user'});
    })
  })
  .catch(err => {
    res.status(400).json({ 'type': 'RT DB error', message: err });
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
    
    // Update Salesforce DB here?
    res.status(201).json({uuid, 'type': 'success', message: 'successfully deleted user from RTP-DB' });
  })
  .catch( err => {
    res.status(400).json({ 'type': 'error', message: err });
  })

}

/**
 * POST /users/:username/:team_id
 *
 * Creates association betwen user and team (adds to Affiliation table)
 */
module.exports.updateUserTeamKey = function(req, res, next) {

  let team_id = req.params.team_id
  
  // JSON Object to insert new affiliation into SF
  let newSFAffiliation = {  
    // Id: "a0C56000000WH3KEAW",
    // npe5__StartDate__c: "2016-01-14",
    // npe5__Status__c: "Current",
    // Rescue_Team_Role__c: "President",
    npe5__Contact__c: "",
    npe5__Organization__c: team_id
    // npe5__EndDate__c: "2016-02-01",
    // Title__c: "Supreme Leader",
    // RT_Site_ID__c: 1
  }
  
  // Find team by given param ID, then
  // find user by given username, then
  // create affiliation with team.addUser
  Model.Team.findById(team_id)
  .then(team => {
    Model.User.find(
      {
        where: { username: req.params.username }
      })
    .then(user => {
        
      // Create new SF affiliation
      newSFAffiliation.npe5__Contact__c = user.uuid
      SFAPI.performRequest('affiliation', 'POST', newSFAffiliation,
        function(data) {
          console.log(data)
          team.addUser(user, {id: data.id})
        })
      
      res.status(201).json({'type': 'success', message: 'successfully added user to team' });
    })
    .catch(err => {
      res.status(400).json({ 'type': 'error', message: err });
    })
  })
  .catch(err => {
    res.status(400).json({ 'type': 'error', message: err });
  })
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
    include: [
    { model: Model.Team, as: 'UserTeams' },
    { where: { 'Team.uuid': team_id }}
    ]
    // where: { 'UserTeams.uuid': req.params.team_id },
    // include: [
    // {
    //   model: Model.Team, as: 'UserTeams'
    // },
    // ]
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
  })
}
