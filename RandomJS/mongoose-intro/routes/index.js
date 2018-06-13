var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/newnote', function(req, res) {
  return standupCtrl.getNote(req, res);
});

module.exports = router;
