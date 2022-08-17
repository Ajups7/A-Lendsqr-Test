// const { Model } = require("objection");

// class Users extends Model.knex(connection) {
//   static get tableName() {
//     return "users";
//   }

//   static get idColumn() {
//     return "id";
//   }

//   static get jsonSchema() {
//     return {
//       type: "object",

//       required: [
//         "id",
//         "email",
//         "first_name",
//         "last_name",
//         "password",
//         "dob",
//         "phonenumber",
//       ],

//       properties: {
//         id: { type: "integer" },
//         email: { type: "string", minlength: 1, maxlength: 255 },
//         first_name: { type: "string", maxlength: 255 },
//         last_name: { type: "string", maxlength: 255 },
//         password: { type: "string", maxlength: 255 },
//         dob: { type: "integer" },
//         phonenumber: { type: "integer", maxlength: 10 },
//         country: { type: "string" },
//       },
//     };
//   }

//   static get relationMappings() {
//     const Accounts = require("./accounts");

//     return {
//       accounts: {
//         relation: Model.HasManyRelation,
//         modelClass: Accounts,
//         join: {
//           from: "users.id",
//           to: "accounts.user_id",
//         },
//       },
//     };
//   }
// }

// module.exports = Users;
