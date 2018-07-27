import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const style = {
  modalScreen: css({
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgba(0,0,0,0.8)',
    zIndex: '99999',
    WebkitTransition: 'opacity 400ms ease-in',
    MozTransition: 'opacity 400ms ease-in',
    transition: 'opacity 400ms ease-in',
    opacity: '1',
    pointerEvents: 'auto',
  }),
  modalWindow: css({
    width: '400px',
    position: 'relative',
    margin: '10% auto',
    padding: '20px 20px 20px 20px',
    borderRadius: '10px',
    background: '#fff',
  }),
  closeButton: css({
    float: 'right',
  }),
  content: css({
    margin: '10%',
  }),
};


const Modal = ({
  id, name, src, alt, closeModal,
}) => (
  <div className={style.modalScreen}>
    <div className={style.modalWindow}>
      <button className={style.closeButton} type="button" onClick={closeModal}>
          Close
      </button>
      <h3>
        {name}
      </h3>
      <p hidden>
        {id}
      </p>
      <img className={style.content} width="300" height="300" src={src} alt={alt} />
    </div>
  </div>
);

Modal.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
