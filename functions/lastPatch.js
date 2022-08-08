const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
exports.handler = async function (event, context) {
  const lastPatch = `https://www.dota2.com/datafeed/patchnotes?version=${event.queryStringParameters.lastPatchId}&language=english
`;
  const response = await fetch(lastPatch);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
