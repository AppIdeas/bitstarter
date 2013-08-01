var express = require('express');
var app = express();


var fs = requre('fs');
var indexfile = 'index.html';
var data = fs.readFileSync(indexfile);

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
