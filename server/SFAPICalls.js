var https = require('https')
let salesforceURL = 'rtdev-libertyinnorthkorea.cs42.force.com'
// Might need these to authenticate to SF API in the future
// let username = ''
// let password = ''
// let apiKey = ''

module.exports.performRequest = function(endpoint, method, data, success) {
  
  let dataString = JSON.stringify(data)
  let headers = {}
  let path_user = '/services/apexrest/rescueteams/contact'
  let path_team = '/services/apexrest/rescueteams/account'
  let path_affiliation = '/services/apexrest/rescueteams/affiliation'

  // Set endpoint
  if( endpoint == 'user' ) {
    endpoint = path_user
    console.log("Endpoint is user!")
  }
  else if( endpoint == 'team' ) {
    endpoint = path_team
    console.log("Endpoint is team!")
  }
  else if( endpoint == 'affiliation' ) {
    endpoint = path_affiliation
    console.log("Endpoint is affiliation!")
  }

  // Set method
  if( method == 'GET' ) {
    endpoint += '?id=' + data
  }
  else {
    headers = {
      'Content-Type': 'application/json',
      'Content-Length': dataString.length      
    }
  }
  
  /** 
  * SF API Endpoint looks like
  * https://rtdev-libertyinnorthkorea.cs42.force.com/services/apexrest/rescueteams/...
  * 
  * Structure the SF API function calls like:
  * path: 'user', 'team', etc...
  * method: 'GET', 'POST', etc...
  * headers: don't wory about right now
  * 
  * Example call from userController doing something with the SF API returned "data":
  * SFAPI.performRequest('user', 'GET', user.salesforce_id, 
        function(data) {
          console.log("SF API response object: " + JSON.stringify(data))
        }
      )
  */
  
  let requestOptions = {
    host: salesforceURL,
    path: endpoint,
    method: method,
    headers: headers
  }

  let req = https.request(requestOptions, function(res) {
    console.log("SF API Status code: " + res.statusCode)
    
    res.setEncoding('utf-8')
    let responseString = ''
    
    res.on('data', function(data) {
      responseString += data
    })
    
    res.on('end', function() {
      let responseObject = JSON.parse(responseString)
      success(responseObject)
    })
  })
  
  req.on('error', function(err) {
    console.log("!!!Salesforce API Error!!! " + err)
  })
  
  req.write(JSON.stringify(data))
  req.end()
    
}