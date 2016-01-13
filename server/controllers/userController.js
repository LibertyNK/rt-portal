var bcrypt = require('bcrypt')
var Model = require('../models/models.js')

// module.exports.show = function(req, res) {
//   res.render('signup')
// }

module.exports.signup = function(req, res, next) {

  var username = req.body.username
  var password = req.body.password
  var password2 = req.body.password2
  
  // if (!username || !password || !password2) {
  //   req.flash('error', "Please, fill in all the fields.")
  //   res.redirect('signup')
  // }
  
  // if (password !== password2) {
  //   req.flash('error', "Please, enter the same password twice.")
  //   res.redirect('signup')
  // }
  
  var salt = bcrypt.genSaltSync(10)
  var hashedPassword = bcrypt.hashSync(password, salt)
  
  var newUser = {
    username: username,
    salt: salt,
    password: hashedPassword
  }
  
  Model.User.create(newUser, function () {
    // if (err) return next(err);
    // req.flash('error', "Account successfully created! Please login with your username and password.")
    // res.redirect('/')
    console.log('created!');
    // res.send({ message: "Account successfully created!" });
 
  }).catch(function(error) {
    // req.flash('error', "Please, choose a different username.")
    // res.redirect('/signup')

  })
}