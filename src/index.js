const next = require('next');
const express = require('express');
const { resolve } = require('path');
const router_middleware = require('./server/middleware/router_middleware');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const next_middleware = app.getRequestHandler();
const { PORT = 8000, IP = '0.0.0.0' } = process.env;

app
  .prepare()
  .then(() => {
    // order matters
    const server = express()
      .use(express.static(resolve(__dirname, 'public')))
      .use(router_middleware)
      .use((req, res) => {
        next_middleware(req, res);
      });

    server.listen(PORT, IP, (err) => {
      if (err) {
        throw err;
      }
      console.log(`Server running on ${IP}:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
