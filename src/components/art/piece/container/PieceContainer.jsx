import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Piece from '../presentational/Piece';

export default class PieceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, src, description } = this.props;
    return (
        <Piece name={name} src={src} description={description} />
    );
  }
}

PieceContainer.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
