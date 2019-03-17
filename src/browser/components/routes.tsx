import * as React from "react";

import { Route, Switch } from "react-router-dom";

import AboutMe from "./AboutMe";
import Art from "./Art";
import Contact from "./Contact";
import Home from "./Home";

const Routes = () => (
    <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/art" component={Art} />
        <Route path="/contact" component={Contact} />
    </Switch>
);

export default Routes;
