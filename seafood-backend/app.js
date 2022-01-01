const express = require('express');
const app = express();
const PORT = 3001;
const { info, error } = require('./core/logger.js');

const setupRoutes = require('./core/setupRoutes.js');

try {
  setupRoutes(app);

  app.server = app.listen(PORT, () => {
    info("YELLOW", `App listening at http://localhost:${PORT}`);
  })
} catch(err) {
  error(err.message);
}


process.on('SIGINT', async () => {
  app.server.close();
  info("YELLOW", 'Server connection closed');
  process.exit(0);
})