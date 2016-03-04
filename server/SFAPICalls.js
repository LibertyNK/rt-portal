var https = require('https')
var salesforceURL = 'rtdev-libertyinnorthkorea.cs42.force.com'
// Might need these to authenticate to SF API in the future
// var username = ''
// var password = ''
// var apiKey = ''

module.exports.performRequest = function(endpoint, method, data, success) {
  
  let dataString = JSON.stringify(data)
  let headers = {}
  
  if( method == 'GET' ) {
    endpoint += '?' + data
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
    port: 80,
    path: endpoint,
    method: method,
    headers: headers
  }

  let req = https.request(requestOptions, function(res) {
    console.log("Status code: " + res.statusCode)
    console.log("Header info: " + res.headers)
    
    res.setEncoding('utf-8')
    let responseString = ''
    
    res.on('data', function(data) {
      responseString += data
    })
    
    res.on('end', function() {
      console.log(responseString) 
      let responseObject = JSON.parse(responseString)
      success(responseObject)
    })
    
    req.write(data)
    req.end()
    
  })
}