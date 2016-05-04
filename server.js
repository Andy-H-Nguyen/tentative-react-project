var express = require('express');
var PORT = process.env.PORT;
// Create our app
var app = express();

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
