import React, { Component } from 'react';

import ImageBox from '../presentational/ImageBox';
import Title from '../presentational/Title';

import AbstractHeader from '../../../img/header/abstract/home_page.png';

const styles = {
  previewLayout: {
    display: 'flex',
    flexFlow: 'row wrap ',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'center',
  },
};

const previewImages = [
  {
    id: 'stringId',
    name: 'imageName',
    src: AbstractHeader,
    alt: 'imageAltText',
  },
  {
    id: 'stringId',
    name: 'imageName',
    src: AbstractHeader,
    alt: 'imageAltText',
  },
];

export default class PreviewContainer extends Component {
  constructor() {
    super();
    this.state = {
      // Images can be enlarged. This indicates which ImageBox is enlarged.
      enlarged: 0,
      previewImages,
    };
  }

  handleClick(id) {
      debugger;
  }

  render() {
    const imageBoxes = previewImages.map(
      previewImage => (
          <button onClick={() => this.handleClick(previewImage.id)}>
          <ImageBox
            key={previewImage.id}
            name={previewImage.name}
            src={previewImage.src}
            alt={previewImage.alt}
          />
        </button>
      ),
    );
    return (
      <div>
        <Title name="My latest work" />
        <div style={styles.previewLayout}>
          { imageBoxes }
        </div>
      </div>
    );
  }
}
