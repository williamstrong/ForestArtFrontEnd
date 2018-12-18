/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import React from "react";

const style = {
    container: css({
        textAlign: "center"
    }),
    title: css({
        fontFamily: "Europa-Light",
        fontSize: "3em"
    })
};

export interface TitleProps {
    name: string;
}

const Title = (props: TitleProps) => (
    <div css={style.container}>
        <p css={style.title}>{name}</p>
    </div>
);

export default Title;
