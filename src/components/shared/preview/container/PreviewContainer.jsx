import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import PreviewImage from '../presentational/PreviewImage';
import src from '../../../../../img/header/abstract/home_page.png';

const fakeImageDate = [
  {
    key: 0,
    name: 'imageName',
    src,
    description: 'description',
  },
  {
    key: 1,
    name: 'imageName',
    src,
    description: 'description',
  },
  {
    key: 2,
    name: 'imageName',
    src,
    description: 'description',
  },
  {
    key: 3,
    name: 'imageName',
    src,
    description: 'description',
  },
  {
    key: 4,
    name: 'imageName',
    src,
    description: 'description',
  },
  {
    key: 5,
    name: 'imageName',
    src,
    description: 'description',
  },
];

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
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className={styles.previewContainer}>
          {fakeImageDate.map(imageData => <PreviewImage {...imageData} />)}
        </div>
      </div>
    );
  }
}
