/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

import { Link } from "react-router-dom";

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

export default function CategoryLink(props: CategoryLinkProps) {
    return (
        <Link to={props.href} css={styles.link}>
            {props.name}
        </Link>
    );
}
