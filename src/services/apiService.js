import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = async (text, page) => {
  const API_KEY = process.env.REACT_APP_IMAGE_API_KEY;
  const request = `/?image_type=photo&orientation=horizontal&q=${text}&page=${page}&per_page=12&key=${API_KEY}`;

  const { data } = await axios.get(request);
  const images = data.hits;
  return images;
};

export default fetchImages;
