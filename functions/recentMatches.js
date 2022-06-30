const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
exports.handler = async function (event, context) {
  const recentMatches = `https://www.dota2.com/webapi/IDOTA2DPC/GetRecentAndUpcomingMatches/v001`;
  const response = await fetch(recentMatches);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
