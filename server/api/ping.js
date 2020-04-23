const {
  Router
} = require('express');

module.exports = new Router()
  .get('/', (_req, res) => {
    res.status(200).send('pong');
  });
