import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Piece from '../presentational/Piece';

export default class PieceContainer extends Component {
  constructor(props) {
    super(props);
    const { category, piece } = this.props;
    this.fetchImageData(category, piece);
    this.state = {
      image: {},
    };
  }

  componentDidUpdate(prevProps) {
    const { piece, category } = this.props;
    const { piece: prevPiece } = prevProps;
    if (piece !== prevPiece) {
      this.fetchImageData(category, piece);
    }
  }

  query = (category, name) => (
    JSON.stringify({
      query: `{
        image(category: "${category}" name: "${name}")
         { id name sourceStandard description altText }
       }`,
    })
  )

  fetchImageData = (category, name) => (
    fetch('/graphql/?', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: this.query(category, name),
    })
      .then(r => r.json())
      .then((data) => {
        const { data: { image } } = data;
        this.setState({ image });
      })
  );

  render() {
    const { image } = this.state;
    if (image.id !== undefined) {
      return (
        <Piece
          name={image.name}
          sourceLarge={image.sourceStandard}
          description={image.description}
        />
      );
    }
    return null;
  }
}

PieceContainer.propTypes = {
  category: PropTypes.string.isRequired,
  piece: PropTypes.string.isRequired,
};
