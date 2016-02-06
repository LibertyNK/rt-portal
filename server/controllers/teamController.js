var Model = require('../models/models.js')

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

  let team_name = req.body.team_name
  
  let newTeam = {
    team_name: team_name
  }
  
  Model.Team.create(newTeam)
    .then(team => {
      res.status(201).json({team, 'type': 'success', message: 'success'});
    })
    .catch(err => {
      // Add some more error handling for different team creation errors here.
      
      // Default error message - send everything
      res.status(400).json({ 'type': 'error', message: err }); 
  })
}

/**
 * PUT /teams/:team_id
 * 
 * Update specific team based on team_id
 */
module.exports.putTeam = function(req, res, next) {
  
  let team_name = req.body.team_name
  
  // Fills in blank for any blank fields from form
  Model.Team.update(
  {
    team_name: team_name
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