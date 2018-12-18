import React from "react";

export interface HeaderProps {
    css: any;
}

const Header = (props: HeaderProps) => <div css={props.css} />;

export default Header;
