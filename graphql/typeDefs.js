const { gql } = require("apollo-server");

module.exports = gql`
  type Account {
    created: String
    createdBy: String
    active: Boolean
    products: [Product]
    owner: Owner
    admins: [Admin]
  }

  type Product {
    name: String
    active: Boolean
  }

  type Owner {
    firstName: String
    lastName: String
    email: String
    password: String
    role: String
  }

  type Admin {
    firstName: String
    lastName: String
    email: String
    password: String
    role: String
    products: [Product]
  }

  input OwnerInput {
    firstName: String
    lastName: String
    email: String
    password: String
    role: String
  }

  type Query {
    account(ID: ID!): Account!
  }

  type Mutation {
    createOwner(ownerInput: OwnerInput): Owner!
  }
`;
