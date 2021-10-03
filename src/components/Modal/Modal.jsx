import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscButtonPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscButtonPress);
  }

  handleEscButtonPress = event => {
    if (event.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.toggleModal();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
