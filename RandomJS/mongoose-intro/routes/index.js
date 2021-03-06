var express = require('express');
var router = express.Router();
var standupCtrl = require('../controller/standup.server.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  return standupCtrl.list(req, res);
});

router.get('/newnote', function(req, res) {
  return standupCtrl.getNote(req, res);
});

router.post('/newnote', function(req, res) {
  return standupCtrl.create(req, res);
})

router.post('/', function(req, res) {
  return standupCtrl.filterByMember(req, res);
})

module.exports = router;
