import React from "react";
import PropTypes from "prop-types";

const Title = ({ name }) => (
    <p className="title" >
        {name}
    </p>
);
Title.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Title;
