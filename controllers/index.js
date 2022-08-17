module.exports = controllers = {
  users: { create: require("./user").create },
  accounts: {
    create: require("./account").create,
    fund: require("./account").fund,
    withdraw: require("./account").withdraw,
    transfer: require("./account").transfer,
  },
};
