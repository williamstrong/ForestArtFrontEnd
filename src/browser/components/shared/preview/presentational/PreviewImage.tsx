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
    transform: "translateY(1em)"
});

const ImageContainer = styled.img({
    width: "100%",
    height: "auto",
    transition: "all 0.5s linear",
    opacity: 1
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
        opacity: 0.2
    }
});

export interface PreviewImageProps {
    name: string;
    sourceStandard: string;
    description: string;
    altText?: string;
}

const PreviewImage = (props: PreviewImageProps) => (
    <Container>
        <TextContainer>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </TextContainer>
        <ImageContainer
            src={imageSource(props.sourceStandard)}
            alt={props.altText}
        />
    </Container>
);

export default PreviewImage;
