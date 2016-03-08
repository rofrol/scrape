var env = require('envalid');

env.validate(process.env, {
    NODE_ENV: { required: true, choices: [ 'production', 'test', 'development' ] },
    PGUSER: { required: true, regex: /.+/ },
    PGHOST: { required: true, regex: /.+/ },
    PGDATABASE: { required: true, regex: /.+/ },
    PGPASSWORD: { required: true, regex: /.+/ },
    SRV_PORT: { required: true, parse: env.toNumber },
});
