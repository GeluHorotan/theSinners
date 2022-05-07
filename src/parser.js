const txtToJSON = require('txt-file-to-json');
const dataInJSON = txtToJSON({ data: 'TEST' });

console.log(dataInJSON);
