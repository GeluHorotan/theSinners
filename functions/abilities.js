const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
exports.handler = async function (event, context) {
  const abilities = `https://www.dota2.com/datafeed/abilitylist?language=english`;
  const response = await fetch(abilities);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
