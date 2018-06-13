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