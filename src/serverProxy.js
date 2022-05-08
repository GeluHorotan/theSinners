const { createProxyMiddleware } = require('http-proxy-middleware');

const steamApiKey = 'D3ECAFCD18BAD344D7E3A0B44D55E53F';

module.exports = function (app) {
  app.use(
    proxy('', {
      target: `https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=${steamApiKey}`,
      secure: 'false',
      changeOrigin: true,
    })
  );
};
