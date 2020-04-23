const {
  Router
} = require('express');

const pingRouter = require('./ping');

module.exports = new Router()
  .use('/ping', pingRouter);
