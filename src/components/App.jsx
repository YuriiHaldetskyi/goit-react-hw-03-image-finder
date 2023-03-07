import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    topic: '',
    loading: false,
  };

  handleFormSubmit = topic => {
    this.setState({ topic });
  };
  render() {
    const { topic } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery topic={topic}></ImageGallery>
      </>
    );
  }
}
