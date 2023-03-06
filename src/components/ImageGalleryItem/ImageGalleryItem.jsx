import { Component } from 'react';
import { Modal } from 'components/Modal/modal';
import { ModalImage, Image, Item } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
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
