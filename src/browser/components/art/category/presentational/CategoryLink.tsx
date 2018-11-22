import { css } from "emotion";
import PropTypes from "prop-types";
import React from "react";

import Nav from "../../../shared/nav/Nav";

const styles = {
    link: css({
        paddingLeft: "1em",
        paddingRight: "1em",
        color: "black",
        textDecoration: "none",
        font: "1em Europa-Light"
    })
};

export interface CategoryLinkProps {
    name: string;
    href: string;
    category: string;
}

const CategoryLink = (props: CategoryLinkProps) => (
    <Nav name={props.name} href={props.href} className={styles.link} />
);

export default CategoryLink;
