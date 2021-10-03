import './ImageGalleryItem.scss';

export default function ImageGalleryItem({ webformatURL, largeImageURL, tags }) {
  return (
    <li className="ImageGalleryItem">
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
}
