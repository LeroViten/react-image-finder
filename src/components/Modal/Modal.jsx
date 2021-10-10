import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscButtonPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscButtonPress);
  }

  handleEscButtonPress = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className={`Modal animate__animated animate__jackInTheBox`}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};
