var express = require('express');
var fs = require('fs');

var readFromIndex = function() {
  var buf = fs.readFileSync('index.html');
  return buf.toString();
}

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var text = readFromIndex();
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
