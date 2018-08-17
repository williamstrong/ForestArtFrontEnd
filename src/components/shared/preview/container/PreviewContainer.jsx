import React, { Component } from 'react';
import { css } from 'emotion';

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
    this.fetchImageData();
    this.state = {
      allImages: [],
    };
  }

  fetchImageData = category => (
    fetch('/graphql/?', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query: '{ allImages { id name sourceStandard description altText } }' }),
    })
      .then(r => r.json())
      .then((data) => {
        const { data: { allImages } } = data;
        this.setState({ allImages });
      })
  );

  render() {
    const { allImages } = this.state;
    return (
      <div>
        <div className={styles.previewContainer}>
          {allImages.map(imageData => <PreviewImage {...imageData} />)}
        </div>
      </div>
    );
  }
}
