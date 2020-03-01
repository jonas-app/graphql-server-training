const { gql } = require("apollo-server");
const { createStickyNote } = require("./stickyNoteMethods");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Mutation {
    createStickyNote(text: String!): CreateStickyNoteResult
  }

  type CreateStickyNoteResult {
    stickyNote: StickyNote
  }

  type StickyNote implements Thing {
    _id: ID
    text: String
    type: String
    signature: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Mutation: {
    createStickyNote: (root, args, context) => createStickyNote(args.text)
  }
};

module.exports = {
  typeDefs,
  resolvers
};
