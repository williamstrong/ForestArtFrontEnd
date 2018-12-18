/**
import * as React from "react";
import { Link } from "react-router-dom";

export interface NavProps {
    name: string;
    href: string;
    css: any;
}

const Nav = (props: NavProps) => (
    <Link to={props.href} css={props.css}>
        {props.name}
    </Link>
);

export default Nav;
*/
