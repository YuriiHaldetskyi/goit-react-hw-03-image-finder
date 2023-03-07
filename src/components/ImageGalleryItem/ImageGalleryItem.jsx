import { Component } from 'react';
import { Modal } from 'components/Modal/modal';
import { ModalImage, Image, Item } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  };

  state = {
    isModalOpen: false,
  };

  toggleModal = () =>
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));

  render() {
    const { webformatURL, largeImageURL, tags } = this.props.item;
    return (
      <Item onClick={this.toggleModal}>
        <Image src={webformatURL} alt={tags} />
        {this.state.isModalOpen && (
          <Modal onClose={this.toggleModal}>
            <ModalImage src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </Item>
    );
  }
}
