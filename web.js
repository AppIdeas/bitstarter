var express = require('express');
var app = express();


var fs = require('fs');
var indexfile = 'index.html';
var data = fs.readFileSync(indexfile);

app.use(express.logger());

app.get('/', function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/utf8'});
  response.write(data);
  response.end();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
