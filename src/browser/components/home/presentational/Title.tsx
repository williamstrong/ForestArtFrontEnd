/** @jsx jsx */
import { css, jsx } from "@emotion/core";
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
        <p css={style.title}>{props.name}</p>
    </div>
);

export default Title;
