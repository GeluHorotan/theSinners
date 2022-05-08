const proxy = require('http-proxy-middleware');
const steamApiKey = 'D3ECAFCD18BAD344D7E3A0B44D55E53F';
module.exports = function (app) {
  app.use(
    proxy(`/IEconDOTA2_570/GetHeroes/v0001/?key=${steamApiKey}`, {
      target: `https://api.steampowered.com`,

      changeOrigin: true,
    })
  );
};
