var passport = require('passport')
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var userController = require('../controllers/userController.js')
var teamController = require('../controllers/teamController.js')

module.exports = function(express) {
  var router = express.Router()

  // .unless paths are those that don't require JWT
  // expressJWT({ secret: 'secrettoken' }).unless({ path: ['/login'] });

  /**
   * Checks if user is authenticated. Currently, authentication
   * required for any page, outside of root domain '/'.
   *
   * Any RESTful route that calls this requires auth, take it out
   * of the call if you don't want user to be auth'd for that API
   * call.
   */
  var isAuthenticated = function (req, res, next) {
    // if (req.isAuthenticated())
    //   return next()
    // req.flash('error', 'You have to be logged in to access the page.')
    // res.redirect('/')
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

  // Endpoint handlers for /users/:username
  router.route('/users/:username')
    .get(userController.getUserByUsername);
    
  // Endpoint handler to update team id for a user
  router.route('/users/:username/:team_id')
    .post(userController.updateUserTeamKey);
    
  // Endpoint to get all users by team_id
  router.route('/users/team/:team_id')
    .get(userController.getUsersByTeam);

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


  router.post('/login', function(req, res, next ) {
    passport.authenticate('local', function( err, user, info) {
      if (err) { return next(err) }
      if (!user) {
        res.status(401).json({ message: 'Uh oh! We do not recognize that email and password combination!' });
      }
      else {
        //user has authenticated correctly thus we create a JWT token
        let token = jwt.sign({ username: user.username, full_name: user.first_name + ' ' + user.last_name }, 'secrettoken', { expiresIn: 86400});
        res.status(200).json({ token : token });

      }
   
    })(req, res)
  });

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