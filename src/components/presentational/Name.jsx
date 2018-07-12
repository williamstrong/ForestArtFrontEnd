import React from "react";
import PropTypes from "prop-types";

const Name = ({ name, id }) => (
    <p id={id}>{name}</p>
);

Name.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Name;