var passport = require('passport')
var userController = require('../controllers/userController.js')
var teamController = require('../controllers/teamController.js')

module.exports = function(express) {
  var router = express.Router()

  /**
   * Checks if user is authenticated. Currently, authentication
   * required for any page, outside of root domain '/'.
   * 
   * Any RESTful route that calls this requires auth, take it out
   * of the call if you don't want user to be auth'd for that API
   * call.
   */
  var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next()
    req.flash('error', 'You have to be logged in to access the page.')
    res.redirect('/')
  }
  
  // Endpoint handlers for /users
  router.route('/users')
    .post(userController.postUsers) // register user
    .get(userController.getUsers);
  
  // Endpoint handlers for /users/:user_id
  // router.route('/users/:user_id')
  //   .get(userController.getUser)
  //   .put(userController.putUser)
  //   .delete(userController.deleteUser);

  // Endpoint handlers for /users/:user_id
  router.route('/profile/:username')
 
    .get(userController.getUserByUsername)
    
  // Endpoint handlers for /teams
  router.route('/teams')
    .post(teamController.postTeams)
    .get(teamController.getTeams);
  
  // Endpoint handlers for /teams/:team_id
  // router.route('/teams/:team_id')
  //   .get(teamController.getTeam)
  //   .put(teamController.putTeam)
  //   .delete(teamController.deleteTeam);

  // Endpoint handlers for /teams/:team_name
  router.route('/teams/:team_name')
    .get(teamController.getTeamByName);
  
  // router.get('/signup', userController.show)
  // router.post('/signup', userController.signup)
  router.post('/login', passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/login',
      failureFlash: true 
  }));

  router.post('/signup', function (req, res, next) {
    res.redirect('/new_team');
  });

  router.get('/dashboard', isAuthenticated, function(req, res) {
    res.json({ message: 'Render dashboard here' });
  })

  router.get('/logout', function(req, res) {
    req.logout()
    res.redirect('/')
  })

  return router;
}