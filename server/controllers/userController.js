var bcrypt = require('bcrypt');
var Model = require('../models/models.js');


let User = Model.User;

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
 * GET /users/:user_id
 * 
 * Returns user by id, if exists
 */
module.exports.getUser = function(req, res, next) {
  
  Model.User.findById(req.params.user_id)
    .then(user => {
      res.status(200).json({user, 'type': 'success', message: 'success'});
    })
    .catch(err => {
      res.status(400).json({ 'type': 'user lookup', message: err });

    })
}

/**
 * GET /users/:username
 * 
 * Returns user by username, if exists
 */
module.exports.getUserbyName = function(req, res, next) {
  
}

/**
 * POST /users
 * 
 * Takes form data (username, password) from /signup page and creates a new user in Users table after some simple validation. 
 */
module.exports.postUsers = function(req, res, next) {

  console.log("hai");

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
    email: email,
    salt: salt,
    password: hashedPassword,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    admin_level: 2
  }

  Model.User.create(newUser)
    .then(user => {
      res.status(201).json({username: user.username, 'type': 'success', message: 'success'});
    })
    .catch(err => {
      // Add some more error handling for different user creation errors here.
      // Default error message - send everything
      console.log(err);
      res.status(400).json({ 'type': 'error', message: err }); 
  })
}

/**
 * PUT /users/:user_id
 * 
 * Update specific user based on user_id
 */
module.exports.putUser = function(req, res, next) {
  
  // New params
  let email = req.body.email
  let password = req.body.password
  let salt = bcrypt.genSaltSync(10)
  let hashedPassword = bcrypt.hashSync(password, salt)
  let first_name = req.body.first_name
  let last_name = req.body.last_name
  
  // Fills in blank for any blank fields from form
  Model.User.update(
  {
    email: email,
    salt: salt,
    password: hashedPassword,
    first_name: first_name,
    last_name: last_name
  },
  {
    where: { uuid: req.params.user_id }
  })
  .then(user => {
    res.status(201).json({user, 'type': 'success', message: 'successfully updated user'});
  })
  .catch(err => {
    res.status(400).json({ 'type': 'error', message: err });
  })
}

/**
 * DELETE /users/:user_id
 * 
 * Delete specific user based on user_id.
 * NOTE: This currently only deletes from our local psql DB, NOT from LiNK Salesforce API.
 */
module.exports.deleteUser = function(req, res, next) {
  
  Model.User.destroy(
  {
    where: { uuid: req.params.user_id }
  })
  .then(uuid => {
    res.status(201).json({uuid, 'type': 'success', message: 'successfully deleted user from RTP-DB' });
  })
  .catch(err => {
    res.status(400).json({ 'type': 'error', message: err });
  })

}



//Update User's Team and Admin Level
module.exports.updateUserTeam = function (req, res, next) {

  // console.log("this is team info passing from teamController: " + req.team_name);

  User.find({ where: { email: req.leader } })
      .then(user => {

        console.log("User Info got back from DB query: " + user.email);
        console.log("Team ID got from Team controler: " + req.uuid);

        User.update({

          team_uuid: req.uuid,
          admin_level: 2
        },
        {
          where: { email: req.leader }
        })

          .then(updated_user => {
            res.status(201).json({updated_user, 'type': 'success', message: "successfully updated user's team"});
          })
          .catch(error => {
            console.log(error);
            // res.status(400).json({ 'type': 'error', message: error });

          });

      })
      .catch(err => {

        res.status(400).json({ 'type': 'error', message: err}); 


      });
}


//Get User By Name 
module.exports.getUserByName = function (req, res, next) {

   User.find({ where: { username: req.params.username } })
      .then(user => {
        console.log(user.username);
        if (user && user.username != null) {
          res.status(201).json({  user: {
                                          username: user.username,
                                          user_id: user.uuid,
                                          level: user.admin_level
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

