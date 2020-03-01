const { gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Chair implements Thing {
    _id: ID
    text: String
    type: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {};

module.exports = {
  typeDefs,
  resolvers
};
