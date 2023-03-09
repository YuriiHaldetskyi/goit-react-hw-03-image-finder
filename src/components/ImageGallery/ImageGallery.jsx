import { Loader } from 'components/Loader/loader';
import { Component } from 'react';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';

import fetchTopic from 'SearchServies/Api';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  static propTypes = {
    topic: PropTypes.string.isRequired,
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  };
  state = {
    topic: [],
    error: null,
    status: 'idle',
    page: 1,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.setState({ status: 'pending', page: 1 });
      fetchTopic(this.props.topic, this.state.page)
        .then(topic => {
          if (topic.hits.length === 0) {
            this.setState({ status: 'rejected' });
            return;
          }
          this.setState({
            topic: [...topic.hits],
            status: 'resolved',
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  toggleModal = () =>
    this.setState(prevState => ({ showModal: !prevState.showModal }));

  loadMore = () => {
    const newPage = this.state.page + 1;
    this.setState(() => ({
      page: newPage,
    }));
    fetchTopic(this.props.topic, newPage)
      .then(topic =>
        this.setState({
          topic: [...this.state.topic, ...topic.hits],
          status: 'resolved',
        })
      )
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  render() {
    const { status, topic, error } = this.state;
    if (status === 'idle') {
      return <h1>Input topic please</h1>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return (
        <h2>
          {' '}
          {error ? error.message : `Sorry i dont find ${this.props.topic}`}
        </h2>
      );
    }
    if (status === 'resolved') {
      return (
        <>
          <Gallery>
            {topic.length !== 0 &&
              topic.map(item => {
                return <ImageGalleryItem key={item.id} item={item} />;
              })}
          </Gallery>
          {topic.length <= 12 ? '' : <Button onClick={this.loadMore} />}
        </>
      );
    }
  }
}
