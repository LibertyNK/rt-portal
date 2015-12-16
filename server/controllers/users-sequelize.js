var _ = require('lodash');
var User = require('../models/user-sequelize');
var passport = require('passport');

/**
 * POST /login
 */
exports.postLogin = function(req, res, next) {
  // Do email and password validation for the server
	passport.authenticate('local', function(err, user, info) {
    if(err) {
    	console.log("Error authenticating!");
    	return next(err);
    }
    if(!user) {
    	console.log("User auth error!");
      req.flash('errors', {msg: info.message});
    }
    // Passport exposes a login() function on req (also aliased as logIn()) that can be used to establish a login session
    else {
	    	req.logIn(user, function(err) {
	    	console.log("User logging in/...");
	      if(err) return next(err);
	      req.flash('success', { msg: 'Success! You are logged in'});
	      res.end('Success');
	    });
    }
	})(req, res, next);
};


/**
 * GET /logout
 */
exports.getLogout = function(req, res, next) {
  // Do email and password validation for the server
  req.logout();
  next();
};

/**
 * POST /signup
 * Create a new local account
 */
exports.postSignUp = function(req, res, next) {
  var user =  new User({
    email: req.body.email,
    password: req.body.password
  });
  
  User.find({where: {username: req.body.email}}).success(function(user) {
  	if(!user) {
  		User.create({email: user.body.email, password: user.body.password}).error(function(err){
  			console.log(err);
  		})
  	} else {
  		if(err) return next(err);
  	}
  })
};

