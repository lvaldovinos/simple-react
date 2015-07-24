'use strict';

var express = require('express'),
    router = express.Router(),
    apiRouter = require('./api'),
    appRouter = require('./app');
    
router.use('/apis', apiRouter);
router.use('/apps', appRouter);


module.exports = router;