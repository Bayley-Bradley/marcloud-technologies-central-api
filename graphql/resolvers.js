const Account = require("../models/account");

module.exports = {
  Query: {
    async account(_, { ID }) {
      return await Account.findById(ID);
    },
  },
  Mutation: {},
};
