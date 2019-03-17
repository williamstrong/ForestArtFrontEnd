/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

import getImageSource from "../../../../util/Source";

const styles = {
    container: css({
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignContent: "center",
        margin: "10%"
    }),
    textContainer: css({
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",

        margin: "10%"
    }),
    imageContainer: css({
        height: "600",
        width: "600"
    }),
    title: css({}),
    description: css({})
};

export interface PieceProps {
    name: string;
    sourceLarge: string;
    description: string;
}

const Piece = (props: PieceProps) => (
    <div css={styles.container}>
        <div css={styles.imageContainer}>
            <picture>
                <img
                    height="600"
                    width="600"
                    src={getImageSource(props.sourceLarge)}
                    alt={props.description}
                />
            </picture>
        </div>
        <div css={styles.textContainer}>
            <p css={styles.title}>{name}</p>
            <p css={styles.description}>{props.description}</p>
        </div>
    </div>
);

export default Piece;
