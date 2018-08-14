import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import Header from '../header/Header';
import ArtNav from '../nav/ArtNav';
import PieceContainer from './container/PieceContainer';


function fetchPieceData(category, piece) {
  return ({
    key: 0,
    name: `${category} + ${piece}`,
    src: '',
    description: `${category} piece ${piece}`,
  });
}

export default class Piece extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match: { params: { category, piece } } } = this.props;
    const data = fetchPieceData(category, piece);
    return (
      <div>
        <Header
          styles={
            css({
              width: '100%',
              height: '300',
            })
          }
        />
        <ArtNav />
        <PieceContainer {...data} />
      </div>
    );
  }
}

Piece.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string,
      piece: PropTypes.string,
    }),
  }).isRequired,
};
