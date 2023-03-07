import { Component } from 'react';
import { ModalWindow, BackDrop, ButtonClose } from './modal.styled';
import { createPortal } from 'react-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import PropTypes from 'prop-types';

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.currentTarget !== e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <BackDrop onClick={this.handleOverlayClick}>
        <ModalWindow>
          <ButtonClose type="button" onClick={this.props.onClose}>
            <AiOutlineCloseCircle size="35" />
          </ButtonClose>

          {this.props.children}
        </ModalWindow>
      </BackDrop>,
      document.getElementById('modal-root')
    );
  }
}
