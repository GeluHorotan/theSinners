const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
exports.handler = async function (event, context) {
  const dotaLeagues = `https://www.dota2.com/webapi/IDOTA2League/GetLeaguesData/v001?league_ids=14281,14280,14299,14298,14279,14278,14295,14296,14248,14247,14270,14271,&delay_seconds=600`;
  const response = await fetch(dotaLeagues);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
