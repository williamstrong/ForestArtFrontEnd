/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

const styles = {
    name: css({}),
    description: css({})
};

export interface ImageTextProps {
    name: string;
    description: string;
    className?: string;
}

// {props.description}</p>
const ImageText = (props: ImageTextProps) => (
    <div css={props.className}>
        <h1 css={styles.name}>{props.name}</h1>
        <p css={styles.description}>5 x 7</p>
        <p css={styles.description}>Water Color and Pen</p>
    </div>
);

export default ImageText;
