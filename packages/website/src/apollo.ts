import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import * as HttpLink from 'apollo-link-http';

export const client = new ApolloClient({
  link: new HttpLink.HttpLink({
    uri: 'https://localhost:4000',
    credentials: 'include'
  }),
  cache: new InMemoryCache(),
});