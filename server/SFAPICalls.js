var https = require('https')
var salesforceURL = 'rtdev-libertyinnorthkorea.cs42.force.com'
// Might need these to authenticate to SF API in the future
// var username = ''
// var password = ''
// var apiKey = ''

module.exports.performRequest = function(endpoint, method, data, success) {
  
  let dataString = JSON.stringify(data)
  let headers = {}
  let path_user = '/services/apexrest/rescueteams/contact'
  let path_team = '/services/apexrest/rescueteams/account'

  if( endpoint == 'user' ) {
    endpoint = path_user
    console.log("Endpoint is user!")
  }
  else if( endpoint == 'team' ) {
    endpoint = path_team
    console.log("Endpoint is team!")
  }
 
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
  */
  let requestOptions = {
    host: salesforceURL,
    // port: 443,
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
      console.log("Response string: " + responseString) 
    })
    
    res.on('end', function() {
      let responseObject = JSON.parse(responseString)
      success(responseObject)
    })
  })
  
  req.write(data)
  req.end()
    
}