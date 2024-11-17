import Profile from "./pages/Profile/Profile"
import React from 'react'
import { ApolloProvider } from '@apollo/client';
// import client from './utils/apollo-client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Profile />
    </ApolloProvider >
  )

}

export default App
