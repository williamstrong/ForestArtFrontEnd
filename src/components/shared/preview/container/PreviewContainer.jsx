import React, { Component } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import PreviewImage from '../presentational/PreviewImage';

const styles = {
  previewContainer: css({
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',

    margin: '10%',

    textAlign: 'center',
  }),
};

export default class PreviewContainer extends Component {
  constructor(props) {
    super(props);
    const { category } = props;
    this.fetchImageData(category);
    this.state = {
      images: [],
    };
  }

  componentDidUpdate(prevProps) {
    const { category } = this.props;
    const { prevCategory } = prevProps;
    if (category !== prevCategory) {
      this.fetchImageData(category);
    }
  }

  query = (category) => {
    if (category != null) {
      return JSON.stringify({
        query: `{ images(category: "${category}") { id name category sourceStandard description altText } }`,
      });
    }
    return JSON.stringify({
      query: '{ images { id name category sourceStandard description altText } }',
    });
  }

  fetchImageData = category => (
    fetch('/graphql/?', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: this.query(category),
    })
      .then(r => r.json())
      .then((data) => {
        const { data: { images } } = data;
        this.setState({ images });
      })
  );

  render() {
    const { images } = this.state;
    return (
      <div>
        <div className={styles.previewContainer}>
          {images.map(imageData => (
            <Link
              key={imageData.id}
              to={`/art/${imageData.category}/${imageData.name}`}
            >
              <PreviewImage {...imageData} />
            </Link>))}
        </div>
      </div>
    );
  }
}

PreviewContainer.propTypes = {
  category: PropTypes.string,
};

PreviewContainer.defaultProps = {
  category: null,
};
