const { gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    instruction: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    instruction: (root, args, context) =>
      "Hey there 👋 Prof. Maple called us for help. The schema & docs will help you figure out how to reach her."
  }
};

module.exports = {
  typeDefs,
  resolvers
};
