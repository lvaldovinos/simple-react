'use strict';

var express = require('express'),
    router = express.Router();
    
router.get('/', function(req, res, next) {
  res.send('get apps');
});

router.post('/', function(req, res, next) {
  res.send('create apps');
});

router.put('/', function(req, res, next) {
  res.send('update apps');
});

router.delete('/', function(req, res, next) {
  res.send('delete apps');
});

module.exports = router;