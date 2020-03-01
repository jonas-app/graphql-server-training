const { gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
// fb, unlock, ...?
const typeDefs = gql`
  type Computer implements Thing {
    _id: ID
    text: String
    type: String
    facebook: Facebook
  }

  type Facebook {
    friends: [Person]
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {};

module.exports = {
  typeDefs,
  resolvers
};
