var express = require('express');
var app = express();

// We need body parser to be able to send POST requests
var bodyParser = require("body-parser");

const Bookmark = require('./db.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/bookmarks', function(req, res) {

  Bookmark.findAll().then(bookmarks => {

    res.end(JSON.stringify(bookmarks))

  })

})


app.get('/bookmarks/:id', function(req, res) {

  Bookmark.findById(req.params.id).then(aBookmark => {

    res.end(JSON.stringify(aBookmark))

  })

})

app.post('/bookmarks',function(req,res){
  var url=req.body.url;
  var title=req.body.title;
  Bookmark.create({url: req.body.url, title: req.body.title}).then(() => {
    res.end(`Added ${url} and ${title}`);
  })
  
});

app.listen(process.argv[2])