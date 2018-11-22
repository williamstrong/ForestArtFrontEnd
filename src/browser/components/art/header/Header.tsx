import PropTypes from "prop-types";
import React from "react";

export interface HeaderProps {
    styles: string;
}

const Header = (props: HeaderProps) => <div className={props.styles} />;

export default Header;
