const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
exports.handler = async function (event, context) {
  const dotaItems = `https://www.dota2.com/datafeed/itemlist?language=english`;
  const response = await fetch(dotaItems);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
