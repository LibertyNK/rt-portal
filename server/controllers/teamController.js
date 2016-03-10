var Model = require('../models/models.js');
var userController = require('../controllers/userController.js')
var SFAPI = require('../SFAPICalls.js')

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
 * GET /teams/teamId/:team_id
 *
 * Returns team by id, if exists
 */

module.exports.getTeam = function(req, res, next) {
   console.log("made it to the get team, also there is this: " + req.params.team_id);
  Model.Team.findById(req.params.team_id)
  .then(team => {
    console.log("got the team. see: " + team);
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

  console.log(req.body)
  
  let team_name = req.body.team_name,
      team_type = req.body.team_type,
      color = req.body.color,
      goal = req.body.goal,
      about = req.body.about,
      address1 = req.body.address1,
      address2 = req.body.address2,
      team_city = req.body.team_city,
      team_state = req.body.team_state,
      zipcode = req.body.zipcode,
      country = req.body.country,
      username = req.body.username,
      leader = req.body.leader;

  //validate team inputs here

  let newTeam = {
    team_name: team_name,
    team_type: team_type,
    color: color,
    amount_raised: 0,
    goal: goal,
    about: about,
    address1: address1,
    address2: address2,
    team_city: team_city,
    team_state: team_state,
    zipcode: zipcode,
    country: country,
    username: username,
    leader: leader,
    salesforce_id: ""

  }
  
  let newSFTeam = {
    Name: team_name,
    Preferred_Name__c: "",
    Date_Established__c: "3/15/2016",
    Date_Inactive__c: "3/15/2026",
    Rescue_Team_Status__c: "",
    ShippingCity: team_city,
    ShippingState: team_state,
    ShippingCountry: country,
    RT_Profile_URL__c: "",
    Facebook__c: "",
    Facebook_Group__c: "",
    Twitter__c: "",
    Instagram__c: "",
    Website: "",
    How_Started__c: about,
    Type: "",
    RT_Site_ID__c: ""
  }

  // Create SF new team, get SF team id, and create new RT team callback
  SFAPI.performRequest('team', 'POST', newSFTeam,
    function(data) {
    
    console.log(data)
    newTeam.salesforce_id = data.id
    
    Model.Team.create(newTeam)
      .then( team => {
        userController.updateUserTeam(team, res, next);
       })
      .catch(err => {

        // Add some more error handling for different team creation errors here.

        console.log(err);

        // Default error message - send everything
        res.status(400).json({ 'type': 'error', message: err });

      });
  })
}

/**
 * PUT /teams/:team_id
 *
 * Update specific team based on team_id
 */
module.exports.putTeam = function(req, res, next) {

  // Assumes a blank sent from the user/form means user wants that field blank
  // I can add validation for a blank field to not change in the update
  let team_name = req.body.team_name;
  let address1 = req.body.address1;
  let address2 = req.body.address2;
  let team_state = req.body.team_state;
  let zipcode = req.body.zipcode;
  let country = req.body.country;
  let about = req.body.about;
  let leader = req.body.leader;

  // Assumes a blank sent from the user/form means user wants that field blank
  Model.Team.update(
  {
    team_name: team_name,
    address1: address1,
    address2: address2,
    team_state: team_state,
    zipcode: zipcode,
    country: country,
    about: about,
    leader: leader
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


/**
 * GET /teams/teamName/:team_name
 *
 * Returns team by name, if exists
 */
module.exports.getTeamByName = function(req, res, next) {
      console.log("made it to controller");
  Model.Team.find({ where: { username: req.params.team_name } })
      .then(team => {

        userController.getUsersByTeam(team, res, next);
        

      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ 'type': 'error', message: "Team Not Found" });
      });

}
