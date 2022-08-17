const express = require("express");
const controllers = require("../controllers");
const Joi = require("joi");
const {
  createUserValidator,
  createAccountValidator,
  fundAccountValidator,
  transferValidator
} = require("../validators");

const router = express.Router();

router.post("/users", createUserValidator, controllers.users.create);
router.post("/accounts", createAccountValidator, controllers.accounts.create);
router.post(
  "/users/:id/accounts/fund",
  fundAccountValidator,
  controllers.accounts.fund
); //user_id, account_id amount
router.post(
  "/users/:id/accounts/withdraw",
  fundAccountValidator,
  controllers.accounts.withdraw
); //user_id, account_id, amount
router.post(
  "/users/:id/accounts/transfer",
  transferValidator,
  controllers.accounts.transfer
); //debtor_account_id, creditor_account_id, amount, debtor_user_id, creditor_user_id, currency

module.exports = router;
