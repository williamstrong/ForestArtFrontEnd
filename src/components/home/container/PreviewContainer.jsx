import React, { Component } from 'react';
import { css } from 'emotion';

import ImageBox from '../presentational/ImageBox';
import Title from '../presentational/Title';
import Modal from '../presentational/Modal';

import AbstractHeader from '../../../img/header/abstract/home_page.png';

const styles = {
  previewLayout: css({
    display: 'flex',
    flexFlow: 'row wrap ',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'center',

    marginLeft: '10%',
    marginRight: '10%',
  }),
  previewContainer: css({
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  }),
};

export default class PreviewContainer extends Component {
  constructor() {
    super();
    this.state = {
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
        {
          id: 2,
          name: 'imageName',
          src: AbstractHeader,
          alt: 'imageAltText',
        },
        {
          id: 3,
          name: 'imageName',
          src: AbstractHeader,
          alt: 'imageAltText',
        },
        {
          id: 4,
          name: 'imageName',
          src: AbstractHeader,
          alt: 'imageAltText',
        },
        {
          id: 5,
          name: 'imageName',
          src: AbstractHeader,
          alt: 'imageAltText',
        },
        {
          id: 6,
          name: 'imageName',
          src: AbstractHeader,
          alt: 'imageAltText',
        },
        {
          id: 7,
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

    const retVal = previewImages.filter(previewImage => previewImage.id === imageId);
    return retVal[0];
  }

  openModal(imageId) {
    this.setState({
      showModal: true,
      modalProps: this.getPreviewImageById(imageId),
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      modalProps: null,
    });
  }

  render() {
    const { showModal, modalProps, previewImages } = this.state;

    let modal;
    if (showModal) {
      modal = <Modal {...modalProps} closeModal={() => this.closeModal()} />;
    } else {
      modal = null;
    }

    return (
      <div className={styles.previewContainer}>
        <Title name="My latest work" />
        <div className={styles.previewLayout}>
          {previewImages.map(previewImage => (
            <ImageBox
              onClick={() => this.openModal(previewImage.id)}
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
