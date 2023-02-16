import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import schema from './schema';
import resolvers from './resolvers';

;(async () => {
   const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    /*context: {

    }*/
   })

  const app = express()
  await server.start()
  server.applyMiddleware({
    app,
    path: '/graphql',
    cors: {
      origin: ['https://localhost:3000'],
      credentials: true,
    },
  })
  await app.listen({ port:8000 })
  console.log(`server listening on 8000...`)
})()