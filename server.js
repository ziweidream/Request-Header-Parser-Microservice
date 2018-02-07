// server.js
// where your node app starts
const publicIp = require('public-ip');

// init project
var http = require('http');

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
  myobj.language = request.headers["accept-language"];
publicIp.v4().then(ip => {
	console.log(ip);
  myobj.ipaddress = ip;
	//=> '46.5.21.123'

  response.send(myobj);
});

publicIp.v6().then(ip => {
	console.log(ip);
  myobj.ipaddress = ip;
	//=> 'fe80::200:f8ff:fe21:67cf'
 
  response.send(myobj);
});
  
  
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
