import { css } from "emotion";
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

const ImageText = (props: ImageTextProps) => (
    <div className={props.className}>
        <h1 className={styles.name}>{props.name}</h1>
        <p className={styles.description}>{props.description}</p>
    </div>
);

export default ImageText;
