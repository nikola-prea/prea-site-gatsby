import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://website-v2-0.ey.r.appspot.com/graphql',
    fetch,
  }),
  cache: new InMemoryCache(),
});
