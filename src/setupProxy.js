const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/v4',  // Tutaj umieść fragment URL, który powinieneś przekierować (np. /v4)
    createProxyMiddleware({
      target: 'http://api.football-data.org',
      changeOrigin: true,
    })
  );
};
