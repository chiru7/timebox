var express = require('express');
var router = express.Router();

var logger = require('../modules/logger');
var models = require('../models');

/* GET events listing. */
router.get('/', function(req, res, next) {
  var eventId = req.query.event_id;
  var eventName = req.query.event_name;
  var userId = req.query.user_id;
  models.Event.findOrCreate({
    where: {
      id: eventId
    },
    defaults: {
      id: eventId,
      event_name: eventName,
      user_id: userId
    }
  }).spread(function(event, created) {
    logger.app.debug('event:', event);
    res.send({"event": event, "created": created});
  });
});

module.exports = router;
