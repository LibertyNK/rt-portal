var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var Model = require('../models/models.js');

module.exports = function(app) {
  app.use(passport.initialize());

  passport.use(new LocalStrategy(
    {
      usernameField: 'email'
    },
    function(email, password, done) {
      
      Model.User.findOne({
        where: {
          email : email
        }
      }).then(function(user) {

        // No user found with that username
        if (user === null) {
          return done(null, false, { message: 'Incorrect credentials.' });
        }
        
        let hashedPassword = bcrypt.hashSync(password, user.salt);
        
        // Success
        if (user.password === hashedPassword) {
          return done(null, user);
        }
        
        // Incorrect password
        return done(null, false, { message: 'Incorrect credentials.' });
      });
    }
  ));
};