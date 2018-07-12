import React from "react";
import PropTypes from "prop-types";

const Nav = ({ name, href, id }) => (
        <a href={href} id={id}>
            {name}
        </a>
);
Nav.propTypes = {
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};

export default Nav;