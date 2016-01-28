var passport = require('passport');
var userController = require('../controllers/userController.js');
var teamController = require('../controllers/teamController.js');

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
      return next();

    res.redirect('/');
  }
  
  // Endpoint handlers for /users
  router.route('/users')
    .post(userController.postUsers) // register user
    .get(userController.getUsers);
  
  // Endpoint handlers for /users/:user_id
  router.route('/users/:user_id')
    .get(userController.getUser)
    .put(isAuthenticated, userController.putUser)
    .delete(isAuthenticated, userController.deleteUser);
    
  // Endpoint handlers for /teams
  router.route('/teams')
    // .post(isAuthenticated, teamController.postTeams) <--- Turn isAuthenticated off for now becasue no user info yet
    .post(teamController.postTeams)
    .get(isAuthenticated, teamController.getTeams);
  
  // Endpoint handlers for /users/:user_id
  router.route('/teams/:team_id')
    .get(isAuthenticated, teamController.getTeam)
    .put(isAuthenticated, teamController.putTeam)
    .delete(isAuthenticated, teamController.deleteTeam);
  
  // router.get('/signup', userController.show)
  // router.post('/signup', userController.signup)
  router.post('/login', passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/',
      failureFlash: true 
  }))

  router.get('/dashboard', isAuthenticated, function(req, res) {
    res.json({ message: 'Render dashboard here' });
  })

  router.get('/logout', function(req, res) {
    req.logout()
    res.redirect('/')
  })

  return router;
}