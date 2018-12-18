/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { Link } from "react-router-dom";

import getImageSource from "../../../../util/Source";

const styles = {
    box: css({
        textAlign: "center",
        position: "relative",
        marginBottom: "10%",
        marginLeft: "5%",
        marginRight: "5%"
    }),
    image: css({
        maxWidth: 300,
        maxHeight: 300,
        opacity: 0.6
    }),
    text: css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        font: '2em "Europa-Light"',

        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }),
    linkText: css({
        textDecoration: "none",
        color: "black"
    })
};

export interface CategoryBoxProps {
    url: string;
    name: string;
    category: string;
    image: string;
    altText: string;
}

const CategoryBox = (props: CategoryBoxProps) => (
    <div css={styles.box}>
        <Link css={styles.linkText} to={`${props.url}/${props.category}`}>
            <picture>
                <img
                    css={styles.image}
                    src={getImageSource(props.image)}
                    alt={props.altText}
                />
            </picture>
            <p css={styles.text}>{props.category}</p>
        </Link>
    </div>
);

export default CategoryBox;
