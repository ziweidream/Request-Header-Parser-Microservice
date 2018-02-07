// server.js
// where your node app starts


// init project

var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (request, response) {
  var myobj = {};  
 var str = request.headers["accept-language"],  
 arr = str.split(";");
  myobj.language = arr[0];
  
 

  var address = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
  
  var ipaddress = address.split(",");
  myobj.ipaddress = ipaddress[0];
 
  var agent = request.headers['user-agent'];
  var user = agent.split(')');
  var user1 = user[0].split('(');
  var userAgent = user1[1];
   myobj.software = user1;
  response.send(myobj);
  
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
