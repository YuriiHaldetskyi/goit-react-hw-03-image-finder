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
//  import { Formik } from 'formik';
//  import PropTypes from 'prop-types';
//  import styled from '@emotion/styled'
//  import * as yup from 'yup';

// Доробити модалку
// Зробити кнопку Load More
// Доробити PropTypes в 2-х домашках
