const { ApolloServer } = require("apollo-server");
const mongoDB = require("./api/mongoDB");
const personGQL = require("./person/personGQL");
const instructionGQL = require("./instruction/instructionGQL");

const server = new ApolloServer({
  typeDefs: [
    instructionGQL.typeDefs,
    personGQL.typeDefs
  ],
  resolvers: [
    instructionGQL.resolvers,
    personGQL.resolvers
  ]
});

mongoDB
  .connect()
  .then(() => server.listen())
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
