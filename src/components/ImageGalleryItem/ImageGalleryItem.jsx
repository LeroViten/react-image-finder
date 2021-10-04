import './ImageGalleryItem.scss';

export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  toggleModal,
  setModalImgInfo,
}) {
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
