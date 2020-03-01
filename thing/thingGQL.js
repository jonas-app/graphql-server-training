const { gql } = require("apollo-server");
const { inspectRoom } = require("./thingMethods");
const { TYPE_STICKY_NOTE, TYPE_CHAIR, TYPE_COMPUTER } = require("./types");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  extend type Query {
    room(type: ThingType, limit: Int = 3): [Thing]
  }

  enum ThingType {
    ${TYPE_STICKY_NOTE}
    ${TYPE_CHAIR}
    ${TYPE_COMPUTER}
  }

  type Thing {
    _id: ID
    text: String
    type: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    room: (root, args, context) => inspectRoom(args.type, args.limit)
  },
  Thing: {
    __resolveType(obj, context, info) {
      return obj.type;
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
};
