const {
  Router
} = require('express');

module.exports = Router()
  .get('/', (_req, res) => {
    res.status(200).send('pong');
  });
