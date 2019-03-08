const healthCheck = (app) => {
  app.get('/healthcheck', async (request, response) => {
    const health = { status: true };
    response.json(health);
  });
};

module.exports = { healthCheck };
