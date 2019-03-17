/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

import PreviewContainer from "../../shared/preview/container/PreviewContainer";
import ArtNav from "../ArtNav";
import Header from "../Header";
import CategoryNavigation from "./container/CategoryNavigation";

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

export default function Category(props: CategoryProp) {
    const {
        match: {
            params: { category }
        }
    } = props;
    return (
        <React.Fragment>
            <Header css={styles.headerImage} />
            <ArtNav />
            <CategoryNavigation />
            <PreviewContainer category={category} />
        </React.Fragment>
    );
}
