var pg = require('pg');

var client = new pg.Client(`pg://${process.env.DB_USER}@${process.env.DB_HOST}/${process.env.DB_NAME}`);
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
