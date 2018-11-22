import { css } from "emotion";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

import ArtNav from "../nav/ArtNav";
import CategoiesContainer from "./container/CategoriesContainer";

export interface CategoriesProps extends RouteComponentProps {}

const Categories = (props: CategoriesProps) => (
    <div>
        <ArtNav />
        <CategoiesContainer {...props} />
    </div>
);

export default Categories;
