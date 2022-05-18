const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async function (event, context) {
  const heroData = `https://www.dota2.com/datafeed/herodata?language=english&hero_id=${event.queryStringParameters.id}`;
  const response = await fetch(heroData);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
