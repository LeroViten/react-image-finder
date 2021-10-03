import React, { Component } from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    text: '',
    images: [],
    showModal: false,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const API_KEY = '22952317-a5881606497ad665bd114491c';
    const BASE_URL = 'https://pixabay.com/api';
    const prevQuery = prevState.text;
    const nextQuery = this.state.text;
    const page = 1;
    const perPage = 12;
    const request = `/?image_type=photo&orientation=horizontal&q=${nextQuery}&page=${page}&per_page=${perPage}&key=${API_KEY}`;

    if (prevQuery !== nextQuery) {
      this.setState({ status: 'pending' });
      setTimeout(() => {
        fetch(BASE_URL + request)
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(new Error(`No images for ${nextQuery} found`));
          })
          .then(array => {
            const images = array.hits;
            this.setState({ images: [...images], status: 'resolved' });
            console.log(this.state);
          })
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 1500);
    }
  }

  onSubmit = text => {
    this.setState({ text });
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <div className="App">
          <Searchbar onSubmit={this.onSubmit} />
          <ImageGallery images={images} />
        </div>
        <ToastContainer transition={Zoom} autoClose={3000} />
      </>
    );
  }
}
