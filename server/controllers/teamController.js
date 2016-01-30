var Model = require('../models/models.js');
var userController = require('../controllers/userController.js')

let User = Model.User;

/**
 * GET /teams
 * 
 * Returns all teams from Teams table.
 */
module.exports.getTeams = function(req, res, next) {
  
  Model.Team.findAll()
    .then(teams => {
      res.status(200).json({teams, 'type': 'success', message: 'success'});
    })
    .catch(err => {
      res.status(500).json({ 'type': 'team creation', message: err });
    })
}

/**
 * GET /teams/:team_id
 * 
 * Returns team by id, if exists
 */
module.exports.getTeam = function(req, res, next) {

  
  Model.Team.findById(req.params.team_id)
    .then(team => {
      res.status(200).json({team, 'type': 'success', message: 'success'});
    })
    .catch(err => {
      res.status(400).json({ 'type': 'team lookup', message: err });
    })

}

/**
 * POST /teams
 * 
 * Create a new team in Teams table.
 */
 module.exports.postTeams = function(req, res, next) {

  let team_name = req.body.team_name,
      address1 = req.body.address1,
      address2 = req.body.address2,
      team_state = req.body.team_state,
      zipcode = req.body.zipcode,
      country = req.body.country,
      about = req.body.about,
      leader = req.body.leader;

  //validate team inputs here

  
  let newTeam = {
    team_name: team_name,
    address1: address1,
    address2: address2,
    team_state: team_state,
    zipcode: zipcode,
    country: country,
    about: about,
    leader: leader
  }
  
  Model.Team.create(newTeam)
    .then( team => {

      res.status(201).json({team, 'type': 'success', message: 'success'});

      //Update User's Team and User's Admin Level
      console.log("Team info from DB: " + team.uuid + ", team name: " + team.team_name);

      userController.updateUserTeam(team);

     }).catch(err => {

      console.log(err.errors[0].message);
      res.status(400).json({ 'type': 'error', message: err}); 
    });
}

/**
 * PUT /teams/:team_id
 * 
 * Update specific team based on team_id
 */
module.exports.putTeam = function(req, res, next) {
  
  let teamname = req.body.teamname
  
  // Fills in blank for any blank fields from form
  Model.Team.update(
  {
    teamname: teamname
  },
  {
    where: { uuid: req.params.team_id }
  })
  .then(team => {
    res.status(201).json({team, 'type': 'success', message: 'successfully updated team'});
  })
  .catch(err => {
    res.status(400).json({ 'type': 'error', message: err });
  })
}

/**
 * DELETE /teams/:team_id
 * 
 * Delete specific team based on team_id.
 * NOTE: This currently only deletes from our local psql DB, NOT from LiNK Salesforce API.
 */
module.exports.deleteTeam = function(req, res, next) {
  Model.Team.destroy(
    {
      where: { uuid: req.params.team_id }
    })
    .then(uuid => {
      res.status(201).json({uuid, 'type': 'success', message: 'successfully deleted team from RTP-DB' });
    })
    .catch(err => {
      res.status(400).json({ 'type': 'error', message: err });
    })
  }
}

module.exports.getUsername = function(req, res, next) {
  console.log(req.params);
}



