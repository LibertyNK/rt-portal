var passport = require('passport')
var userController = require('../controllers/userController.js')

module.exports = function(express) {
  var router = express.Router()

  var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next()
    req.flash('error', 'You have to be logged in to access the page.')
    res.redirect('/')
  }
  
  // router.get('/signup', userController.show)
  router.post('/signup', userController.signup);

  // router.post('/login', passport.authenticate('local', {
  //     successRedirect: '/dashboard',
  //     failureRedirect: '/',
  //     failureFlash: true 
  // }))

  // router.get('/', function(req, res) {
  //   res.render('home')
  // })

  router.get('/dashboard', isAuthenticated, function(req, res) {
    // res.render('dashboard')
  })

  router.get('/logout', function(req, res) {
    // req.logout()
    // res.redirect('/')
  })

  return router;
}