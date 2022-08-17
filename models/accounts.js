// const config = require("../config");
// const knexconfig = require("../knexfile")[config.env];
// const connection = require("knex")(knexconfig);
// const { Model } = require("objection");

// class Accounts extends Model.knex(connection) {
//   static get tableName() {
//     return "id";
//   }

//   static get idColumn() {
//     return "id";
//   }

//   static get jsonSchema() {
//     return {
//       type: "object",

//       required: ["id", "amount", "user_id"],

//       properties: {
//         id: { type: "integer" },
//         amount: { type: "integer" },
//         user_id: { type: "integer" },
//         currency: { type: "string", minlength: 1, maxlength: 3 },
//       },
//     };
//   }
// }
// module.exports = Accounts;
