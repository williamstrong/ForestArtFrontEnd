import React, { Component } from 'react';

import ImageBox from '../presentational/ImageBox';
import Title from '../presentational/Title';
import Modal from '../presentational/Modal';

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

export default class PreviewContainer extends Component {
  constructor() {
    super();
    this.state = {
      // Images can be enlarged. This indicates which ImageBox is enlarged.
      previewImages: [
        {
          id: 0,
          name: 'imageName',
          src: AbstractHeader,
          alt: 'imageAltText',
        },
        {
          id: 1,
          name: 'imageName',
          src: AbstractHeader,
          alt: 'imageAltText',
        },
      ],
      showModal: false,
    };
  }

  getPreviewImageById(imageId) {
    const { previewImages } = this.state;

    const retVal = previewImages.filter((previewImage) => {
      return previewImage.id === imageId;
    });
    return retVal;
  }

  handleClick(imageId) {
    this.setState({
      showModal: true,
      modalProps: this.getPreviewImageById(imageId),
    });
  }

  render() {
    const { showModal, modalProps, previewImages } = this.state;

    let modal;
    if (showModal) {
      modal = <Modal {...modalProps} />;
    } else {
      modal = null;
    }

    return (
      <div>
        <Title name="My latest work" />
        <div style={styles.previewLayout}>
          {previewImages.map(previewImage => (
            <ImageBox
              onClick={() => this.handleClick(previewImage.id)}
              key={previewImage.id}
              name={previewImage.name}
              src={previewImage.src}
              alt={previewImage.alt}
            />
          ))}
        </div>
        { modal }
      </div>
    );
  }
}
