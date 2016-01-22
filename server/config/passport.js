var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var Model = require('../models/models.js');

module.exports = function(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy(
    function(username, password, done) {
      Model.User.findOne({
        where: {
          'username': username
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
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    Model.User.findOne({
      where: {
        'id': id
      }
    }).then(function (user) {
      if (user === null) {
        done(new Error('Wrong user id.'));
      }
      
      done(null, user);
    });
  });
};