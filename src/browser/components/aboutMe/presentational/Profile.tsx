/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

const styles = {
    container: css({
        textAlign: "center",
        marginBottom: "10%",
        marginLeft: "10%",
        marginRight: "10%"
    }),
    image: css({
        maxWidth: "100%",
        maxHeight: "100%"
    }),
    text: css({})
};

export interface ProfileProps {
    description: string;
    imageSrc: string;
    imageAlt: string;
}

const Profile = (props: ProfileProps) => {
    const { description, imageSrc, imageAlt } = props;
    return (
        <div css={styles.container}>
            <img css={styles.image} src={imageSrc} alt={imageAlt} />
            <p css={styles.text}>{description}</p>
        </div>
    );
};

export default Profile;
