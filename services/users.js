const { knex } = require("../database");

module.exports = {
  create: async (data) => {
    // This service creating a single user to the database
    //check if the user exists
    try {
      const user = await knex("users")
        .select("*")
        .where("email", data.email)
        .limit(1);

      if (user && user.length) {
        return {
          status: 400,
          message: `User with email - ${data.email} already exists`,
        };
      }
      const resp = await knex("users").insert(data);
      console.log(data);
      console.log("Worked", resp);
      return {
        status: 200,
        message: "User Created",
      };
    } catch (error) {
      console.log(error);
      return {
        status: 500,
        message: "Failed",
      };
    }

    // try {
    //   await knex("users").insert(data);
    //   return {
    //     status: 200,
    //     message: "User Created",
    //   };
    // } catch (error) {
    //   if (error.message == "") {
    //     return {
    //       status: 400,
    //       message: `User with email - ${data.email} already exists`,
    //     };
    //   }
    // }
  },
};
