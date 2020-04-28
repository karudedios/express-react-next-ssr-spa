const { Router } = require('express');
const apiRouter = require('../api');

module.exports = new Router().use('/api', apiRouter);
