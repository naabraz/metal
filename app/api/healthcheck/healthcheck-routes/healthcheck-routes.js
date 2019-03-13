const healthCheck = (app) => {
  app.get('/healthcheck', async (request, response) => {
    const health = { healthy: true };
    response.json(health);
  });
};

module.exports = { healthCheck };
