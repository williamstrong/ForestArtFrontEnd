import { css } from "emotion";
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
    <div className={style.container}>
        <p className={style.title}>{name}</p>
    </div>
);

export default Title;
