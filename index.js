require("dotenv").config({ path: __dirname + "/.env" });
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const MONGODB = process.env["CONNECTION_STRING"];
const PORT = process.env.PORT || 5000;

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connection Successful");
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Server is running at ${res.url}`);
  });
