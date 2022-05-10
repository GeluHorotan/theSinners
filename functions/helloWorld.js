const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async function (event, context) {
  const steamAPI = `https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=D3ECAFCD18BAD344D7E3A0B44D55E53F`;
  const response = await fetch(steamAPI);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  };
};
