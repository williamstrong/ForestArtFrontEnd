/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";

import imageSource from "../../../../util/Source";

// Styled components

const TextContainer = styled.div({
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "flex-start",

    textAlign: "left",

    zIndex: 1,
    paddingLeft: "10%",

    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    transition: "all 1s linear",

    visibility: "hidden",
    opacity: 0,
    transform: "translateY(1em)",

    "@media(max-width: 425px), (hover: none)": {
        position: "unset",
        opacity: "unset",
        visibility: "unset",
        padding: "unset",
        transform: "unset",
        alignItems: "center",
        marginBottom: "1em"
    }
});

const ImageContainer = styled.img({
    width: "100%",
    height: "auto",
    transition: "all 0.5s linear",
    opacity: 1,
    borderRadius: "5px",
    boxShadow: "10px 10px 6px 2px rgb(0,0,0,0.15)",
    borderColor: "#efefef",
    borderWidth: "1px",
    borderStyle: "double"
});

const Container = styled.div({
    position: "relative",
    width: "30vw",

    top: "50%",
    transform: "translate(0, -50%)",

    [`:hover ${TextContainer}`]: {
        visibility: "visible",
        opacity: 1,
        transform: "translateY(0em)"
    },

    [`:hover ${ImageContainer}`]: {
        opacity: 0.3,
        boxShadow: "1px 1px 6px 5px #ccc"
    },

    "@media(max-width: 425px), (hover: none)": {
        width: "80vw",
        padding: "1em",
        border: "solid #efefef",
        top: "unset",
        transform: "unset",

        opacity: 1
    }
});

const styles = {
    header: css({
        fontFamily: "europa-light",
        fontSize: "4em",

        "@media(max-width: 425px)": {
            fontSize: "2em",
            margin: 0
        }
    }),
    paragraph: css({
        fontFamily: "europa-light",
        fontSize: "2em",

        "@media(max-width: 425px)": {
            fontSize: "1em",
            margin: "auto"
        }
    })
};

export interface PreviewImageProps {
    name: string;
    sourceStandard: string;
    description: string;
    altText?: string;
}

const PreviewImage = (props: PreviewImageProps) => (
    <Container>
        <TextContainer>
            <h1 css={styles.header}>{props.name}</h1>
            <p css={styles.paragraph}>5" x 7"</p>
            <p css={styles.paragraph}>watercolor | solid press paper</p>
        </TextContainer>
        <ImageContainer
            src={imageSource(props.sourceStandard)}
            alt={props.altText}
        />
    </Container>
);

export default PreviewImage;
