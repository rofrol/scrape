var pg = require('pg');
var conf = require('./config.js');

var client = new pg.Client(conf.db);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }

  client.query("SELECT * from stats", function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    // console.log(result.rows[0]);
    console.log(result.rows[0].hash);
    client.end();
  });
});
