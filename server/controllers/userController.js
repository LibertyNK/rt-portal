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

  let email = req.body.email;
  let password = req.body.password;
  let password2 = req.body.password_conf;
  
  if (!email || !password || !password2) {
    console.log("Missing info"); 
  }

  if (password !== password2) {
    return res.status(404).send({ message: 'Passwords dont match!!' });
  }

  // Need to check if email is unique and send response back to front end
  
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
    res.json({user, message: 'success'});
  }).catch(err => {
    // console.log(err);
    res.json({ message: err.errors[0].message });
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