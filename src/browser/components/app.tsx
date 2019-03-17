import React from "react";
import { ApolloProvider } from "react-apollo";

import client from "../util/Client";

import Routes from "./routes";

const App = () : JSX.Element => (
    <ApolloProvider client={client}>
        <Routes />
    </ApolloProvider>
);

export default App;
