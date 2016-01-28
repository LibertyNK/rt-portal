var bcrypt = require('bcrypt')
var Model = require('../models/models.js')

let User = Model.User;

/**
 * GET /users
 * 
 * Returns all users from Users table.
 */
 module.exports.getUsers = function(req, res, next) {
  Model.User.findAll().then(function(users) {
    res.json(users);
  })
}

/**
 * GET /users/:user_id
 * 
 * Returns user by id, if exists
 */
 module.exports.getUser = function(req, res, next) {
  Model.User.findById(req.params.user_id).then(
    function(err, user) {
      if(err) res.send(err);

      res.json(user);
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
    console.log("Missing info"); 
  }

  if (password !== password2) {

    res.status(400).json({ 'type': 'validation error', message: 'Passwords dont match!!' });
  }
  
  let salt = bcrypt.genSaltSync(10)
  let hashedPassword = bcrypt.hashSync(password, salt)
  
  let newUser = {
    email: email,
    salt: salt,
    password: hashedPassword,
    first_name: req.body.first_name,
    last_name: req.body.last_name
  }


  Model.User.create(newUser).then(user => {
 
    res.status(200).json({user, 'type': 'success', message: 'success'});
    
  }).catch(err => {
    
    // Add sequelize error handling logic here. API Controller will parse errors from sequelize, and respond to front-end with HTTP status code, error type, and specific error message.
    

    res.status(400).json({ 'type': 'error', message: err.errors[0].message }); 
    
  })
}

/**
 * PUT /users/:user_id
 * 
 * Update specific user based on user_id
 */
 module.exports.putUser = function(req, res, next) {
  // TODO
  console.log("This is what user controller receives: " + req.body);
}

/**
 * DELETE /users/:user_id
 * 
 * Delete specific user based on user_id.
 * NOTE: This currently only deletes from our local psql DB, NOT from LiNK Salesforce API.
 */
 module.exports.deleteUser = function(req, res, next) {
  // TODO
}


//Update User's Team and Admin Level
module.exports.updateUserTeam = function (req, res, next) {
  console.log("this is team info passing from teamController: " + req.team_name);
  User.find({ where: { email: req.leader } })
      .then(user => {

        console.log("User Info got back from DB query: " + user.email);
        console.log("Team ID got from Team controler: " + req.uuid);

        User.update({
          team: req.uuid,
          admin_level: 2
        },
        {
          where: { email: req.leader }
        })
          .then(user => {
              // Send back user info in front end? 
          })
          .catch(err => {
              // Send error message?
          });

      })
      .catch(err => {

        res.status(400).json({ 'type': 'error', message: err.errors[0].message }); 

      });
}




