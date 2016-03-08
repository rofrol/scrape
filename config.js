var convict = require('convict');

// Define a schema
var conf = convict({
  env: {
    doc: "The applicaton environment.",
    format: ["production", "development", "test"],
    default: undefined,
    env: "NODE_ENV",
  },
  db: {
    user: {
      doc: "The database user.",
      format: String,
      default: undefined,
      env: "PGUSER",
    },
    host: {
      doc: "The database host.",
      format: String,
      default: undefined,
      env: "PGHOST",
    },
    name: {
      doc: "The database name.",
      format: String,
      default: undefined,
      env: "DATABASE",
    },
  },
}).load({}).validate({strict: true});

var Proxy = require('harmony-proxy');
var handler = {
    get: function(target, name){
        return name in target?
            target[name] :
            target.get(name);
    }
};
var confProxy = new Proxy(conf, handler);

module.exports = confProxy;
