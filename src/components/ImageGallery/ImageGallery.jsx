import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.scss';

export default function ImageGallery({ images, toggleModal, setModalImgInfo }) {
  return (
    <ul className="ImageGallery">
      {images.map(({ webformatURL, largeImageURL, tags, id }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          toggleModal={toggleModal}
          setModalImgInfo={setModalImgInfo}
        />
      ))}
    </ul>
  );
}
