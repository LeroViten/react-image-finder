import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.scss';
import PropTypes from 'prop-types';

export default function ImageGallery({ images, setModalImgInfo }) {
  return (
    <ul className="ImageGallery">
      {images.map(({ webformatURL, largeImageURL, tags, id }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          setModalImgInfo={setModalImgInfo}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setModalImgInfo: PropTypes.func.isRequired,
};
