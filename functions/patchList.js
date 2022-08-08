const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
exports.handler = async function (event, context) {
  const patchList = `https://www.dota2.com/datafeed/patchnoteslist?language=english`;
  const response = await fetch(patchList);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
