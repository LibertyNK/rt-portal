var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var Model = require('../models/models.js');

module.exports = function(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy(
    {
      usernameField: 'email'
    },
    function(email, password, done) {
      Model.User.findOne({
        where: {
          'email' : email
        }
      }).then(function (user) {
        
        // No user found with that username
        if (user === null) {
          return done(null, false, { message: 'Incorrect credentials.' });
        }
        
        var hashedPassword = bcrypt.hashSync(password, user.salt);
        
        // Success
        if (user.password === hashedPassword) {
          return done(null, user);
        }
        
        // Incorrect password
        return done(null, false, { message: 'Incorrect credentials.' });
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.uuid);
  });

  passport.deserializeUser(function(uuid, done) {
    Model.User.findOne({
      where: {
        'uuid': uuid
      }
    }).then(function (user) {
      if (user === null) {
        done(new Error('Wrong user id.'));
      }
      
      done(null, user);
    });
  });
};