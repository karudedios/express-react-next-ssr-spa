const { Router } = require('express');

const pingRouter = require('./ping');

module.exports = Router().use('/ping', pingRouter);
