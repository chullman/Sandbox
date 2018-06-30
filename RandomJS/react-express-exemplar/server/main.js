const express = require('express');

let app = new express();

app.get('/', function(req,res) {
  res.render('./../app/index.ejs', {});
}).use(express.static(__dirname + '/../.tmp')) // need to serve up the entire temp folder (created with gulp bundle) so we can see our jsx file
.listen(7777);
