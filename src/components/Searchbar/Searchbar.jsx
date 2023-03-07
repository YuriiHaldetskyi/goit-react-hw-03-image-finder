import { Header, Button, Label, Field, Form } from './Searchbar.styled';
import { Formik, ErrorMessage } from 'formik';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  static propTypes = {
    topic: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    topic: '',
  };

  hadleChange = e => {
    this.setState({ topic: e.currentTarget.value.toLowerCase() });
  };

  hadleSubmit = event => {
    event.preventDefault();

    if (this.state.topic.trim() === '') {
      alert('Input topic');
      return;
    }
    this.props.onSubmit(this.state.topic);
    this.setState({ topic: '' });
  };

  render() {
    return (
      <Header>
        <Formik>
          <Form onSubmit={this.hadleSubmit}>
            <Field
              type="text"
              name="topic"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.topic}
              onChange={this.hadleChange}
            />
            <ErrorMessage name="topic"></ErrorMessage>
            <Button type="submit">
              <Label>Search</Label>
            </Button>
          </Form>
        </Formik>
      </Header>
    );
  }
}

//  !!! PROPTYPES
