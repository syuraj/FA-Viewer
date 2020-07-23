const { ApolloServer, gql } = require('apollo-server-lambda')

const { runAthenaQuery } = require('./athena-query')

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Prediction {
    product: String
    hold: String
    strategy: String
  }

  type Query {
    athenaQuery: [Prediction]
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    athenaQuery: async () => {
      const predictions = await runAthenaQuery()
      return predictions.Items
    },
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

exports.graphqlHandler = server.createHandler()
