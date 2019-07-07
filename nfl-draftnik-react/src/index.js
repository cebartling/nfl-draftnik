import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import {Auth0Provider} from "./react-auth0-wrapper";

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
    window.history.replaceState(
        {},
        document.title,
        appState && appState.targetUrl ? appState.targetUrl : window.location.pathname
    );
};

const url = process.env.REACT_APP_HASURA_GRAPHQL_URL;
console.log('Hasura URL', url);
const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
console.log('Auth0 domain', auth0Domain);
const auth0ClientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
console.log('Auth0 client ID', auth0ClientId);

const client = new ApolloClient({uri: url});

ReactDOM.render(
    <Auth0Provider
        domain={auth0Domain}
        client_id={auth0ClientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </Auth0Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
