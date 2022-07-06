const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async function (event, context) {
  const enemyTeam = `https://www.dota2.com/webapi/IDOTA2Teams/GetSingleTeamInfo/v001?team_id=${event.queryStringParameters.id}&get_dpc_info=true`;
  const response = await fetch(enemyTeam);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
