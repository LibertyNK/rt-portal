/* Initializing passport.js */
var User = require('../models/user-sequelize');
var local = require('./passport/local');
var google = require('./passport/google');

/*
 * Expose
 */
module.exports = function(app, passport, config) {
  // serialize sessions
  // passport.serializeUser(function(user, done) {
  //   console.log(user.id + " serializing");
  //   done(null, user.id);
  // });

  // passport.deserializeUser(function(id, done) {
  //   console.log(id + " de-serializing");
  //   // Sequelize uses a modified version of Bluebird library which doesn't use 'success' but 'then'
  //   User.find(id).then(
  //     function(user){ done(null, user) },
  //     function(err){ done(err, null) }
  //   );
  // });
  
  // Use this version if findbyid is defined (i.e. Mongoose model)
  // passport.deserializeUser(function(id, done) {
  //     User.findById(id, function(err, user) {
  //         done(err, user);
  //     });
  // });

  // Passport-local-sequelize way of de/serializing
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  //use the following strategies
  passport.use(User.createStrategy());
  // passport.use(local);
  passport.use(google);
};