import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import ArtNav from '../nav/ArtNav';
import PieceContainer from './container/PieceContainer';
import CategoryNavigation from '../category/container/CategoryNavigationContainer';

const styles = {
  categoryNavPosition: css({
    marginRight: 'auto',
  }),
};

export default class Piece extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { match: { params: { category, piece } } } = this.props;
    return (
      <div>
        <ArtNav />
        <CategoryNavigation stylePosition={styles.categoryNavPosition} />
        <PieceContainer category={category} piece={piece} />
      </div>
    );
  }
}

Piece.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string.isRequired,
      piece: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
