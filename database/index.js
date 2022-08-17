const config = require("../config");
const knexconfig = require("../knexfile")[config.env];
const knex = require("knex")(knexconfig);
module.exports = { knex };
