var Standup = require('../models/standup.server.model');

exports.create = function(req, res) {
  var entry = new Standup({
    // The Standup model is from our require statement above, and the name of the document instance from this model is named Entity
    memberName: req.body.memberName,
    project: req.body.project,
    workYesterday: req.body.workYesterday,
    workToday: req.body.workToday,
    impediment: req.body.impediment
  });

  entry.save();

  // redirect to home page
  res.redirect(301, '/');
};

exports.getNote = function (req, res) {
  res.render('newnote', { title: 'standup - new note' })
}

exports.list = function(req, res) {
  var query = Standup.find()

  query.sort({ createdOn: 'desc'})
       .limit(12)
       .exec(function(err,results) {
         res.render('index', {title: 'Standup - List', notes: results});
       });
}

exports.filterByMember = function(req, res) {
  var query = Standup.find();
  var filter = req.body.memberName;

  query.sort({ createdOn: 'desc' });

  if (filter.length > 0)
  {
    query.where({ memberName: filter})
  }

  query.exec(function(err, results) {
    res.render('index', { title: 'Standup - List', notes: results });
  });
};