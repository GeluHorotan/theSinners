const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async function (event, context) {
  const singleMatch = `https://www.dota2.com/webapi/IDOTA2DPC/GetLeagueMatchMinimal/v001?league_id=${event.queryStringParameters.league_id}&match_id=${event.queryStringParameters.match_id}`;
  const response = await fetch(singleMatch);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
