const dotenv = require("dotenv");
if (process.env.NODE_ENV != "production") {
  dotenv.config();
}
module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};
