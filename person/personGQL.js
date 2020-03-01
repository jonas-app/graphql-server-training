const { gql } = require("apollo-server");
const { getProfMaple, talk } = require("./personMethods");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  extend type Query {
    profMaple: Person
  }

  type Person {
    _id: ID
    name: String
    age: Int
    picture: String
    talk: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    profMaple: (root, args, context) => getProfMaple()
  },
  Person: {
    // This happens by default.
    // If the property name matches and there is no resolver specified
    // Appolo Server falls back to the field.
    // Because of this we can already query the picture
    // without implementing a resolver.
    name: (root, args, context) => root.name,
    talk: (root, args, context) => talk(root, args, resolvers)
  }
};

module.exports = {
  typeDefs,
  resolvers
};
