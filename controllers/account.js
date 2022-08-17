const services = require("../services");

module.exports = {
  create: async (req, res, next) => {
    const resp = await services.accounts.create(req.body);
    return res.status(resp.status).send(resp.message);
  },
  fund: async (req, res, next) => {
    const resp = await services.accounts.fund(req.body);
    return res.status(resp.status).send(resp.message);
  },
  withdraw: async (req, res, next) => {
    const resp = await services.accounts.withdraw(req.body);
    return res.status(resp.status).send(resp.message);
  },
  transfer: async (req, res, next) => {
    const resp = await services.accounts.transfer(req.body);
    // console.log(resp)
    return res.status(resp.status).send(resp.message);
  },
};
