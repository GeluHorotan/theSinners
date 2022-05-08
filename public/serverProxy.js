const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('', {
      target: `https://api.steampowered.com`,
      secure: false,
      changeOrigin: true,
    })
  );
};
