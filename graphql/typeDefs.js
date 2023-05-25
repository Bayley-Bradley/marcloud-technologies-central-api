const { gql } = require("apollo-server");

module.exports = gql`
  type Account {
    created: Date
    createdBy: String
    products: Object
    owner: Object
    admins: Array
  }
`;
