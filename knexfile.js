// Update with your config settings.

const config = require("./config");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      database: config.database,
      user: config.username,
      password: config.password,
      host: config.host,
      port: config.port,
    },
  },

  staging: {
    client: "mysql2",
    connection: {
      database: config.database,
      user: config.username,
      password: config.password,
      host: config.host,
      port: config.port,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      database: config.database,
      user: config.username,
      password: config.password,
      host: config.host,
      port: config.port,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
