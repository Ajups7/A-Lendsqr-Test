const services = require("../services");

module.exports = {
  create: async (req, res, next) => {
    const resp = await services.users.create(req.body);
    return res.status(resp.status).send(resp.message);
  },
};
