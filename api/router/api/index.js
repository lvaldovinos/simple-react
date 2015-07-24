'use strict';

var express = require('express'),
    router = express.Router();
    
router.get('/', function(req, res, next) {
  res.send('get apis!');
});

router.post('/', function(req, res, next) {
  res.send('create apis');
});

router.put('/', function(req, res, next) {
  res.send('update apis');
});

router.delete('/', function(req, res, next) {
  res.send('delete apis');
});

module.exports = router;
