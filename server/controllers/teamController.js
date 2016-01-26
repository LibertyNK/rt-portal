var Model = require('../models/models.js')

/**
 * GET /teams
 * 
 * Returns all teams from Teams table.
 */
module.exports.getTeams = function(req, res, next) {
  Model.Team.findAll().then(function(teams) {
    res.json(teams);
  })
}

/**
 * GET /teams/:team_id
 * 
 * Returns team by id, if exists
 */
module.exports.getTeam = function(req, res, next) {
  Model.Team.findById(req.params.team_id).then(
    function(err, team) {
      if(err) res.send(err);
        
    res.json(team);
  })
}

/**
 * POST /teams
 * 
 * Create a new team in Teams table.
 */
 module.exports.postTeams = function(req, res, next) {

  let team_name = req.body.team_name;
  //validate team inputs here
  
  
  let newTeam = {
    teamname: teamname
  }
  
  Model.Team.create(newTeam, function (req, res) {
  }).catch(function(error) {
    // Catch error
  })
}

/**
 * PUT /teams/:team_id
 * 
 * Update specific team based on team_id
 */
module.exports.putTeam = function(req, res, next) {
  // TODO
}

/**
 * DELETE /teams/:team_id
 * 
 * Delete specific team based on team_id.
 * NOTE: This currently only deletes from our local psql DB, NOT from LiNK Salesforce API.
 */
module.exports.deleteTeam = function(req, res, next) {
  // TODO
}