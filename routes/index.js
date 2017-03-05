var express = require('express');
var router = express.Router();

var logger = require('../modules/logger');
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {

  models.User.findAll()
  .then(function(users) {
    logger.app.debug('findAll users:', users);
  })
  .catch(function(error) {
    logger.app.debug('Error:', error);
  });


  res.render('index', { title: 'Express' });
});

module.exports = router;
