const { createProxyMiddleware } = require('http-proxy-middleware');

const steamApiKey = 'D3ECAFCD18BAD344D7E3A0B44D55E53F';

module.exports = function (app) {
  app.use(
    proxy('', {
      target: `https://api.steampowered.com`,
      secure: 'false',
      changeOrigin: true,
    })
  );
};
