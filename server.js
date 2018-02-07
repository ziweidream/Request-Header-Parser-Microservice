// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (request, response) {
  var myobj = {};    
  var address = request.headers['x-forwarded-for'] || request.connection.remoteAddress,  
  ipaddress = address.split(",");
  myobj.ipaddress = ipaddress[0]; 
  var str = request.headers["accept-language"],  
  arr = str.split(";"),  
  lan = arr[0].split(',');
  myobj.language = lan[0];
  var agent = request.headers['user-agent'],
  user = agent.split(')'),
  user1 = user[0].split('('),
  userAgent = user1[1];
  myobj.software = userAgent;
  response.send(myobj);  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
