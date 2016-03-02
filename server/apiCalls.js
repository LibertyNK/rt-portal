var salesforceURL = 'rtdev-libertyinnorthkorea.cs42.force.com'

/** 
* SF API Endpoint looks like
* https://rtdev-libertyinnorthkorea.cs42.force.com/services/apexrest/rescueteams/...
*/
var salesforceAPI = {
  host: salesforceURL,
  port: 80,
  path: '/services/apexrest/rescueteams/contact?id=',
  // method: 'POST', 'GET', 'PUT'
  method: 'GET'
}

var getRequest = https.request(salesforceAPI, function(res) {
  console.log("Status code: " + res.stausCode)
  console.log("Header info: " + res.headers)
  
  res.setEncoding('utf-8')
  let responseString = '';
  
  res.on('data', function(data) {
    responseString += data;
  })
  
  res.on('end', function() {
    console.log(responseString) 
    let responseObject = JSON.parse(responseString)
    success(responseObject)
  })
  
  req.write(data)
  
})