import React from "react";

export interface NameProps {
    name: string;
    css: any;
}

const Name = (props: NameProps) => <p css={props.css}>{props.name}</p>;

export default Name;
