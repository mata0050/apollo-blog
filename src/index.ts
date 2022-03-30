import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import {Query} from './resolvers'




const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query
  }
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
`);
});
