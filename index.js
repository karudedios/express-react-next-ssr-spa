const express = require('express');
const next = require('next');

const nextRoutes = require('./server/routes');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = nextRoutes.getRequestHandler(app);

const apiRouter = require('./server/api');

app.prepare()
  .then(() => {
      const server = express();

      const router = new express.Router().use('/api', apiRouter);
      server.use(router);

      server.get('*', function(req, res) {
        handle(req, res);
      });

      const { PORT = 8000, IP = '0.0.0.0' } = process.env;
      server.listen(PORT, IP, (err) => {
        if (err) { throw err; }
        console.log(`Server running on ${IP}:${PORT}`);
      });
  })
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  });
