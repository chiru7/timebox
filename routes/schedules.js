var express = require('express');
var router = express.Router();

var logger = require('../modules/logger');
var models = require('../models');

/* GET schedules listing. */
router.get('/', function(req, res, next) {
  var scheduleId = req.query.schedule_id;
  var userId = req.query.user_id;
  var eventId = req.query.event_id;
  var ownerId = req.query.owner_id;
  models.Schedule.findOrCreate({
    where: {
      id: scheduleId
    },
    defaults: {
      id: scheduleId,
      user_id: userId,
      event_id: eventId,
      owner_id: ownerId
    }
  }).spread(function(schedule, created) {
    logger.app.debug('schedule:', schedule);
    res.send({"schedule": schedule, "created": created});
  });
});

module.exports = router;
