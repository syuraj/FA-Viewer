const { ApolloServer, gql } = require('apollo-server-lambda')

const runAthenaQuery = require('./athena-query')

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    athenaQuery: async () => {
      return runAthenaQuery()
    },
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

exports.graphqlHandler = server.createHandler()
