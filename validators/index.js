
const Joi = require('joi')
module.exports = {
  createUserValidator: (req, res, next) => {
    //req.body - email, firstname, lastname, password, age, phonenumber, country
    // if (valid) {
    //   return res.status(400).body(req.body);
    // } 

    const schema = Joi.object({

      first_name: Joi.string().alphanum().min(3).max(30).required(),
      last_name: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')), 
      repeat_password: Joi.ref('password'),
      dob: Joi.date().max('2004-1-1'),
      phonenumber: Joi.string().pattern(new RegExp('^[0-9]{10}$')).required()
    });

    const result = schema.validate(req.body);
    if (result.error) {
      return res.status(400).send(result.error.details[0].message);
    }
     next();
  },

  createAccountValidator: (req, res, next) => {
    //req.body - userId 
    const schema = Joi.object({
      user_id: Joi.number(),
      amounts: Joi.number().default(0),
      currency: Joi.string().default('NGN')
    }) 
     
    const result = schema.validate(req.body);
    if (result.error) {
      return res.status(400).send(result.error.details[0].message);

    }
      next();
  },

  fundAccountValidator: (req, res, next) => {
    const schema = Joi.object({
      user_id: Joi.number(),
      account_id: Joi.number(),
      amounts: Joi.number(),
      currency: Joi.string().default('NGN')
    })

    const result =schema.validate(req.body);
    if (result.error) {
      return res.status(400).send(result.error.details[0].message);
    }

    next();
  },

  transferValidator: (req, res, next) => {
    const schema = Joi.object({
      debtor_account_id: Joi.number(),
      creditor_account_id: Joi.number(),
      amounts: Joi.number(),
      debtor_user_id: Joi.number(),
      creditor_user_id: Joi.number(),
      currency: Joi.string().default('NGN')
    })

    const result =schema.validate(req.body);
    if (result.error) {
      return res.status(400).send(result.error.details[0].message);
    }

    next();
  }
};
