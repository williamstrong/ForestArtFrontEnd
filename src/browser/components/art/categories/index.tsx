/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

import ArtNav from "../ArtNav";
import CategoriesContainer from "./container/CategoriesContainer";

const Categories = (props: RouteComponentProps) => (
    <React.Fragment>
        <ArtNav />
        <CategoriesContainer {...props} />
    </React.Fragment>
);

export default Categories;
