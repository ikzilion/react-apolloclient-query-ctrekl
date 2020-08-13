import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import Search from './Search'


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

class App extends Component {

  render() {
    return (
      <ApolloProvider client = {client}>
      <div>
      <Search search = "hola" />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
      </ApolloProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
