import './ImageGalleryItem.scss';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ webformatURL, largeImageURL, tags, setModalImgInfo }) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => setModalImgInfo({ largeImageURL, tags })}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  setModalImgInfo: PropTypes.func.isRequired,
};
