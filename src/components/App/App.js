// import { Component } from 'react';
import { useState, useEffect } from 'react';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import Loader from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.scss';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

export default function App() {
  const [text, setText] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [tags, setTags] = useState(null);

  const fetchImages = () => {
    const API_KEY = '22952317-a5881606497ad665bd114491c';
    const BASE_URL = 'https://pixabay.com/api';
    const perPage = 12;
    const request = `/?image_type=photo&orientation=horizontal&q=${text}&page=${page}&per_page=${perPage}&key=${API_KEY}`;

    setStatus('pending');

    fetch(BASE_URL + request)
      .then(res => res.json())
      .then(array => {
        const images = array.hits;
        if (images.length < 1) {
          toast.error('Nothing found, specify your search');
        }
        setImages(prev => [...prev, ...images]);
        setStatus('resolved');
        setPage(prev => prev + 1);
        if (page !== 1) {
          handlePageScroll();
        }
      })
      .catch(error => {
        setError(error);
        console.error(error.message);
        setStatus('rejected');
      });
  };

  useEffect(() => {
    if (!text) return;
    fetchImages();
  }, [text]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const setModalImgInfo = ({ largeImageURL, tags }) => {
    setLargeImageURL(largeImageURL);
    setTags(tags);
    toggleModal();
  };

  const handlePageScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const onSubmit = query => {
    if (query === text) return;
    setText(query);
    setPage(1);
    setImages([]);
  };

  const onLoadMore = () => {
    fetchImages();
  };

  const showLoadMore = images.length > 0 && images.length >= 12;

  return (
    <>
      <div className="App">
        <Searchbar onSubmit={onSubmit} />
        {status === 'pending' && (
          <Loader
            className="Loader"
            type="Puff"
            color="#00BFFF"
            height={150}
            width={150}
            timeout={2000}
          />
        )}
        <ImageGallery images={images} setModalImgInfo={setModalImgInfo} />
        {showLoadMore && <Button onLoadMore={onLoadMore} />}
        {showModal && (
          <Modal onClose={toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </div>
      <ToastContainer transition={Zoom} autoClose={3000} />
    </>
  );
}

// * WORKING CLASS COMPONENT
// export default class App extends Component {
//   state = {
//     text: '',
//     page: 1,
//     images: [],
//     showModal: false,
//     error: null,
//     status: 'idle',
//     largeImageURL: null,
//     tags: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevQuery = prevState.text;
//     const nextQuery = this.state.text;

//     if (prevQuery !== nextQuery) {
//       this.setState({ images: [], page: 1 });
//       this.fetchImages();
//     }
//   }

// fetchImages = () => {
//   const API_KEY = '22952317-a5881606497ad665bd114491c';
//   const BASE_URL = 'https://pixabay.com/api';
//   const { text, page } = this.state;
//   const perPage = 12;
//   const request = `/?image_type=photo&orientation=horizontal&q=${text}&page=${page}&per_page=${perPage}&key=${API_KEY}`;

//   this.setState({ status: 'pending' });

//   fetch(BASE_URL + request)
//     .then(res => res.json())
//     .then(array => {
//       const images = array.hits;
//       if (images.length < 1) {
//         toast.error('Nothing found, specify your search');
//       }
// this.setState(prevState => ({
//   images: [...prevState.images, ...images],
//   status: 'resolved',
//   page: prevState.page + 1,
// }));
//       if (page !== 1) {
//         this.handlePageScroll();
//       }
//     })
//     .catch(error => this.setState({ error, status: 'rejected' }));
// };

// toggleModal = () => {
//   this.setState(({ showModal }) => ({
//     showModal: !showModal,
//   }));
// };

// setModalImgInfo = ({ largeImageURL, tags }) => {
//   this.setState({ largeImageURL, tags });
//   this.toggleModal();
// };

// handlePageScroll = () => {
//   window.scrollTo({
//     top: document.documentElement.scrollHeight,
//     behavior: 'smooth',
//   });
// };

// onSubmit = text => {
//   this.setState({ text, page: 1 });
// };

// onLoadMore = () => {
//   this.fetchImages();
// };

//   render() {
//     const { images, showModal, largeImageURL, tags, status } = this.state;
//     const showLoadMore = images.length > 0 && images.length >= 12;
// return (
//   <>
//     <div className="App">
//       <Searchbar onSubmit={this.onSubmit} />
//       {status === 'pending' && (
//         <Loader
//           className="Loader"
//           type="Puff"
//           color="#00BFFF"
//           height={150}
//           width={150}
//           timeout={2000}
//         />
//       )}
//       <ImageGallery images={images} setModalImgInfo={this.setModalImgInfo} />
//       {showLoadMore && <Button onLoadMore={this.onLoadMore} />}
//       {showModal && (
//         <Modal onClose={this.toggleModal}>
//           <img src={largeImageURL} alt={tags} />
//         </Modal>
//       )}
//     </div>
//     <ToastContainer transition={Zoom} autoClose={3000} />
//   </>
// );
//   }
// }
