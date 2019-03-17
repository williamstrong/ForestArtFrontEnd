import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import Footer from "../shared/Footer";
import Categories from "./Categories";
import Category from "./Category";
import Piece from "./Piece";

const Art = (props: RouteComponentProps) => (
    <section>
        <Switch>
            <Route
                exact={true}
                path={`${props.match.url}`}
                component={Categories}
            />
            <Route
                path={`${props.match.url}/:category/:piece`}
                component={Piece}
            />
            <Route path={`${props.match.url}/:category`} component={Category} />
        </Switch>
        <Footer />
    </section>
);

export default Art;
