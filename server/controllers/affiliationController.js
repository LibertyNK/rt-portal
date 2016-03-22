var Model = require('../models/models.js');
var SFAPI = require('../SFAPICalls.js')

/**
 * GET /affiliations
 *
 * Returns all affiliations from Af table.
 */
module.exports.getAffiliations = function(req, res, next) {

  Model.Affiliation.findAll()
    .then(affiliations => {
      res.status(200).json({affiliations, 'type': 'success', message: 'success'});
    })
    .catch(err => {
      res.status(500).json({ 'type': 'RT DB error', message: err });
    })

}