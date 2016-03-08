require('./config.js');
require('isomorphic-fetch');
var pg = require('pg');
var SQL = require('sql-template-strings')

fetch('https://kat.cr/json.php?q=+category:tv&field=seeders&order=desc&page=1').then(response => response.json()).then(data => {

  var client = new pg.Client();

  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    queryCount = 0;
    data.list.forEach(elem => {

      var query = client.query(SQL`
        INSERT
        INTO    stats
                (hash, seeds, peers)
        VALUES  (${elem.hash}, ${elem.seeds}, ${elem.peers})
      `);
      queryCount++;
      query.on('error', function(error) {
        console.log(error);
      });
      query.on('end', function(result) {
        queryCount--;
        console.log("Query ended");
        if (result) {
           console.log("Added");
        }
        if (queryCount === 0) {
         client.end();
        }
      });
    });
  });
});
