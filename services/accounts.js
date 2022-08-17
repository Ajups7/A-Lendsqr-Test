const { knex } = require("../database");

module.exports = {
  create: async (data) => {
    // This service creating a single accounts to the database
    //check if the account exists

    const user = await knex("accounts").select("*").where("user_id", data.user_id);   

    if (!user) {
      return {
        status: 400,
        status: `User with id - ${data.user_id} doesnt exist`,
      };
    }

    const accounts = await knex("accounts")
      .select("*")
      .where("user_id", data.user_id)
      .where("currency", data.currency)
      .limit(1);

    if (accounts && accounts.length) {
      return {
        status: 400,
        message: `Account with currency - ${data.user_id} already exists for User with id - ${data.user_id}`,
      };
    }

    const resp = await knex("accounts").insert(data);
    console.log("Worked", resp);
    return {
      status: 200,
      message: "Account Created",
    };
  },

  fund: async function(data) {
    return this.accountUpdate(data, "fund");
  },

  withdraw: async function(data) {
    return this.accountUpdate(data, "withdraw");
  },

  transfer: async function(data) {
    //Get both accounts

    const debtor = await knex("accounts")
      .select("*")
      .where("user_id", data.debtor_user_id)
      .where("id", data.debtor_account_id)
      .where("currency", data.currency)
      .limit(1);

    if (!debtor) {
      return {
        status: 400,
        message: `Debtor Account with id - ${data.debtor_account_id} doesnt exist`,
      };
    }

    const creditor = await knex("accounts")
      .select("*")
      .where("user_id", data.creditor_user_id)
      .where("id", data.creditor_account_id)
      .where("currency", data.currency)
      .limit(1);

    if (!creditor) {
      return {
        status: 400,
        message: `Creditor Account with id - ${data.creditor_account_id} doesnt exist`,
      };
    }

    if (debtor[0].amounts < data.amounts) {
      return {
        status: 400,
        message: `Insufficient Balance`,
      };
    }

    debtor[0].amounts -= data.amounts;
    creditor[0].amounts += data.amounts;

    const creditorUpdate = await knex("accounts")
      .select("*")
      .where("user_id", data.creditor_user_id)
      .where("id", data.creditor_account_id)
      .where("currency", data.currency)
      .update({
        amounts: creditor[0].amounts,
      });

    const debtorUpdate = await knex("accounts")
      .select("*")
      .where("user_id", data.debtor_user_id)
      .where("id", data.debtor_account_id)
      .where("currency", data.currency)
      .update({
        amounts: debtor[0].amounts,
      });
      console.log(creditorUpdate, debtorUpdate)

    if (
      creditorUpdate &&
      debtorUpdate
    ) 
    {
        console.log("here")
      return {
        status: 200,
        message: "Transfer was successful"
      };
    } 
    
    else {
      return {
        status: 400,
        message: "Failed"
      };
    }
  },

  accountUpdate: async function(data, type) {
    const account = await knex("accounts")
      .select("*")
      .where("user_id", data.user_id)
      .where("id", data.account_id)
      .limit(1);

    if (!account || !account.length) {
      return {
        status: 400,
        message: `Account with id - ${data.account_id} doesnt exist`,
      };
    }

    if (type == "fund") {
      account[0].amounts += data.amounts;
    } else if (account[0].amounts > data.amounts) {
      account[0].amounts -= data.amounts;
    } else {
      return {
        status: 400,
        message: `Insufficient Balance`,
      };
    }

    const accountUpdate = await knex("accounts")
      .select("*")
      .where("user_id", data.user_id)
      .where("currency", data.currency)
      .update({
        amounts: account[0].amounts, 
      });

    if (accountUpdate) {
      let message = "";
      if (type == "fund") {
        message = "Account Funding was successful";
      } else {
        message = "Account Withdrawal was successful";
      }
      return {
        status: 200,
        message: message,
      };
    } else {
      return {
        status: 400,
        message: "Failed",
      };
    }
  },
};
