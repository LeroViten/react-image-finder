import React, { Component } from 'react';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';

export default class App extends Component {
  state = {
    text: '',
    page: 1,
    images: [],
    showModal: false,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.text;
    const nextQuery = this.state.text;

    if (prevQuery !== nextQuery) {
      this.setState({ images: [], page: 1 });
      setTimeout(() => {
        this.fetchImages();
      }, 1500);
    }
  }

  fetchImages = () => {
    const API_KEY = '22952317-a5881606497ad665bd114491c';
    const BASE_URL = 'https://pixabay.com/api';
    const { text, page } = this.state;
    const perPage = 12;
    const request = `/?image_type=photo&orientation=horizontal&q=${text}&page=${page}&per_page=${perPage}&key=${API_KEY}`;

    this.setState({ status: 'pending' });

    fetch(BASE_URL + request)
      .then(res => res.json())
      .then(array => {
        const images = array.hits;
        if (images.length < 1) {
          toast.error('Nothing found, specify your search');
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          status: 'resolved',
          page: prevState.page + 1,
        }));
        this.handlePageScroll();
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  handlePageScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  onSubmit = text => {
    this.setState({ text });
  };

  onLoadMore = () => {
    this.fetchImages();
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <div className="App">
          <Searchbar onSubmit={this.onSubmit} />
          <ImageGallery images={images} />
          {images.length > 0 && <Button onLoadMore={this.onLoadMore} />}
        </div>
        <ToastContainer transition={Zoom} autoClose={3000} />
      </>
    );
  }
}
