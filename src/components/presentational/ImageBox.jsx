import React from "react";
import PropTypes from "prop-types";

const ImageBox = ({ name, src}) => (
    <div id={name} >
        <img src={src} height="300" width="300" />
    </div>

);

ImageBox.propTypes = {
    name: PropTypes.string.isRequired,
};

export default ImageBox;
