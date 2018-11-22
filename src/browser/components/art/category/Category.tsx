import { css } from "emotion";
import PropTypes from "prop-types";
import React, { Component } from "react";

import PreviewContainer from "../../shared/preview/container/PreviewContainer";
import Header from "../header/Header";
import ArtNav from "../nav/ArtNav";
import CategoryNavigationContainer from "./container/CategoryNavigationContainer";

const styles = {
    headerImage: css({
        width: "100%",
        height: "300"
    })
};

export interface CategoryProp {
    match: {
        params: {
            category: string;
        };
    };
}

export default class Category extends Component<CategoryProp> {
    constructor(props: CategoryProp) {
        super(props);
        this.state = {};
    }

    public render() {
        const {
            match: {
                params: { category }
            }
        } = this.props;
        return (
            <div>
                <Header styles={styles.headerImage} />
                <ArtNav />
                <CategoryNavigationContainer />
                <PreviewContainer category={category} />
            </div>
        );
    }
}
