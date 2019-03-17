import cors from "cors";
import express from "express";
import React from "react";
import ReactDOM from "react-dom/server";
import { ApolloProvider, getDataFromTree } from "react-apollo";
import { StaticRouter } from "react-router-dom";
import Routes from "../browser/components/routes";
import Html from "./template";

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import fetch from "node-fetch";

const uri = "http://image:8000/graphql/";

const server = express();

server.use(cors());

server.use("/assets", express.static("dist"));

const port = 3000;

server.get("/*", (req, res) => {
    const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
            graphQLErrors.map(({ message, locations, path }) =>
                console.log(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                )
            );

        networkError.stack;
        if (networkError) console.log(`[Network error]: ${networkError}`);
    });

    const httpLink = createHttpLink({
        uri: uri,
        fetch: fetch,
        credentials: "same-origin",
        headers: {
            cookie: req.header("Cookie")
        }
    });

    const link = ApolloLink.from([errorLink, httpLink]);

    const client = new ApolloClient({
        ssrMode: true,
        link,
        cache: new InMemoryCache()
    });

    const context = {};

    const Page = (
        <ApolloProvider client={client}>
            <StaticRouter location={req.url} context={context}>
                <Routes />
            </StaticRouter>
        </ApolloProvider>
    );

    getDataFromTree(Page).then(() => {
        const content = ReactDOM.renderToString(Page);
        const initialState = client.extract();

        const html = <Html content={content} state={initialState} />;

        res.status(200);
        res.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(html)}`);
    });
});

server.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
