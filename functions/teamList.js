const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
exports.handler = async function (event, context) {
  const teamList = `https://www.dota2.com/webapi/IDOTA2DPC/GetDPCSearchResults/v001?search=&count=40&resultflags=2`;
  const response = await fetch(teamList);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
