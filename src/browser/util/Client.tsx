import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const uri = "/graphql/";

export default new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
                graphQLErrors.map(({ message, locations, path }) =>
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                    )
                );
            }
            if (networkError) { console.log(`[Network error]: ${networkError}`); }
        }),
        new HttpLink({
            uri,
            credentials: "same-origin",
            fetch
        })
    ]),
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
});
