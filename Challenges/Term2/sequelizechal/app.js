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

app.put('/bookmarks/:id', function(req, res){

  let updateValues = { url: req.body.url, title: req.body.title };

  Bookmark.update(
    updateValues,
    {returning: true, where: {id: req.params.id} }
  )
  .then(function([ rowsUpdate, [updatedBookmark] ]) {
    res.json(updatedBookmark)
  })
})

app.delete('/bookmarks/:id', function(req, res){
  Bookmark.destroy({ where: { id: [2] }}).then(() => {
    res.end(`Deleted id 2`)
  })
})



app.post('/bookmarks',function(req,res){
  var url=req.body.url;
  var title=req.body.title;

  if (!("url" in req.body)) {
    var url = req.protocol + '://' + req.get('host') + req.originalUrl;
  } else {
    var url = req.body.url;
  }

  Bookmark.create({url: url, title: title}).then(() => {
    res.end(`Added ${url} and ${title}`);
  })
  
});

app.listen(process.argv[2])