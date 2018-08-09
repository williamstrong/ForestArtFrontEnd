import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import PreviewImage from '../../../shared/preview/PreviewImage';

const fakeImageDate = [
  {
    key: 0,
    name: 'imageName',
    src: 'src',
    description: 'description',
  },
  {
    key: 1,
    name: 'imageName',
    src: 'src',
    description: 'description',
  },
  {
    key: 2,
    name: 'imageName',
    src: 'src',
    description: 'description',
  },
  {
    key: 3,
    name: 'imageName',
    src: 'src',
    description: 'description',
  },
  {
    key: 4,
    name: 'imageName',
    src: 'src',
    description: 'description',
  },
  {
    key: 5,
    name: 'imageName',
    src: 'src',
    description: 'description',
  },
];

const styles = {
  previewContainer: css({
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',

    margin: '10%',

    textAlign: 'center',
  }),
};

export default class CategoryPreviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ category: nextProps.category });
  }

  render() {
    const { category } = this.state;
    return (
      <div>
        <p>
          { category }
        </p>
        <div className={styles.previewContainer}>
          {fakeImageDate.map(imageData => <PreviewImage {...imageData} />)}
        </div>
      </div>
    );
  }
}

CategoryPreviewContainer.propTypes = {
  category: PropTypes.string.isRequired,
};
