import { Loader } from 'components/Loader/loader';
import { Component } from 'react';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    topic: null,
    error: null,
    status: 'idle',
    pages: 12,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.getItems();
    }
    if (prevState.pages !== this.state.pages) {
      this.getItems();
    }
  }

  getItems = () => {
    const KEY = `33196555-32542256d6492fa532620aad6`;
    {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${this.props.topic}&page=1}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.pages}`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(
              `Sorry we dont have a picture witch name is ${this.props.topic}`
            )
          );
        })
        .then(topic => {
          if (topic.hits.length !== 0) {
            this.setState({ topic, status: 'resolved' });
          } else {
            this.setState({
              error: `Sorry topic ${this.props.topic} is absent`,
              status: 'rejected',
            });
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  };
  toggleModal = () =>
    this.setState(prevState => ({ showModal: !prevState.showModal }));

  loadMore = () =>
    this.setState(prevState => ({ pages: prevState.pages + 12 }));
  render() {
    const { status, topic, error } = this.state;
    if (status === 'idle') {
      return <h1>Input topic please</h1>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <h2> {error.message}</h2>;
    }
    if (status === 'resolved') {
      return (
        <>
          <Gallery>
            {topic.hits.map(item => {
              return <ImageGalleryItem key={item.id} item={item} />;
            })}
          </Gallery>
          <Button onClick={this.loadMore} />
        </>
      );
    }
  }
}

// key 33196555-32542256d6492fa532620aad6
