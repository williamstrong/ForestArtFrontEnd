import React from 'react';
import PropTypes from 'prop-types';

export interface ImageBoxProps {
  alt: string;
  src: string;
  handleClick: () => void;
};
// MouseEvent

const ImageBox = (props: ImageBoxProps) => (
  <button type="button" onClick={props.handleClick}>
    <img src={props.src} alt={props.alt} height="300" width="300" />
  </button>
);

export default ImageBox;
