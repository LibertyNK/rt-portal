var bcrypt = require('bcrypt')
var Model = require('../models/models.js')

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

  let username = req.body.username
  let password = req.body.password
  let password2 = req.body.password2
  console.log("username: " + username + ", password: " + password + ", passconf: " + password2)
  
  if (!username || !password || !password2) {
    // req.flash('error', "Please, fill in all the fields.")
    // res.redirect('signup')
    console.log("Missing info")    
  }
  
  if (password !== password2) {
    // req.flash('error', "Please, enter the same password twice.")
    // res.redirect('signup')
    console.log("Passwords don't match")
  }
  
  let salt = bcrypt.genSaltSync(10)
  let hashedPassword = bcrypt.hashSync(password, salt)
  
  let newUser = {
    username: username,
    salt: salt,
    password: hashedPassword
  }
  
  Model.User.create(newUser, function (req, res) {
    // magic happens here
    // TODO- Isaac to look into exactly how passport.
  }).catch(function(error) {
    // Catch error
  })
}

/**
 * PUT /users/:user_id
 * 
 * Update specific user based on user_id
 */
module.exports.putUser = function(req, res, next) {
  // TODO
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