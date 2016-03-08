require('./config.js');
require('isomorphic-fetch');

function getData() {
  // https://www.googleapis.com/freebase/v1/text/en/bob_dylan
  // https://kat.cr/json.php?q=expanse+category:tv&field=seeders&order=desc&page=1
  // https://kat.cr/json.php?q=+category:highres-movies&field=seeders&order=desc&page=1
  // fetch('https://www.googleapis.com/freebase/v1/text/en/bob_dylan').then(response => response.json());
  // fetch('https://kat.cr/json.php?q=expanse+category:tv&field=seeders&order=desc&page=1', {mode: 'no-cors'}).then(response => response.json());
  return fetch('https://kat.cr/json.php?q=expanse+category:tv&field=seeders&order=desc&page=1').then(response => response.json());
}

var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  getData().then(data => {
    response.end(JSON.stringify(data));
  });
}).listen(process.env.SRV_PORT);

console.log('open address http://localhost:' + process.env.SRV_PORT);
