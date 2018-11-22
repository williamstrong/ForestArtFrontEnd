import * as React from "react";
import { Link } from "react-router-dom";

export interface NavProps {
    name: string;
    href: string;
    className: string;
}

const Nav = (props: NavProps) => (
    <Link to={props.href} className={props.className}>
        {props.name}
    </Link>
);

export default Nav;
