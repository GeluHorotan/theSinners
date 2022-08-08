const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
exports.handler = async function (event, context) {
  const news = `https://store.steampowered.com/events/ajaxgetpartnereventspageable/?clan_accountid=0&appid=570&offset=0&count=${event.queryStringParameters.count}&l=english&origin=https:%2F%2Fwww.dota2.com`;
  const response = await fetch(news);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
