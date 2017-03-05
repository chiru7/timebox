var express = require('express');
var router = express.Router();

var logger = require('../modules/logger');
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var userId = req.query.user_id;
  var userName = req.query.user_name;
  models.User.findOrCreate({
    where: {
      id: userId
    },
    defaults: {
      id: userId,
      user_name: userName
    }
  }).spread(function(user, created) {
    logger.app.debug('user:', user);
    res.send({"user": user, "created": created});
  });
});

module.exports = router;
