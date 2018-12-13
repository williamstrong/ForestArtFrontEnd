import React from "react";
import { ApolloProvider } from "react-apollo";

import client from "../util/Client";

import { Route } from "react-router-dom";

import Routes from "./routes";

const App = () => (
    <ApolloProvider client={client}>
        <Routes />;
    </ApolloProvider>
);

export default App;
