import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import './Searchbar.scss';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
  state = {
    text: '',
  };

  handleChange = event => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.text.trim() === '') {
      return toast.error('Enter city name');
    }
    this.props.onSubmit(this.state.text);
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            value={this.state.text}
            onChange={this.handleChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
