import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import './Searchbar.scss';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({ onSubmit }) {
  const [text, setText] = useState('');

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (text.trim() === '') {
      return toast.error('Enter valid search');
    }
    onSubmit(text);
    setText('');
  };

  return (
    <header className={`Searchbar animate__animated animate__fadeInDown`}>
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          value={text}
          onChange={handleChange}
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
// export default class Searchbar extends Component {
//   state = {
//     text: '',
//   };

//   handleChange = event => {
//     this.setState({
//       text: event.target.value,
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     if (this.state.text.trim() === '') {
//       return toast.error('Enter city name');
//     }
//     this.props.onSubmit(this.state.text);
//     this.setState({
//       text: '',
//     });
//   };

//   render() {
//     return (
//       <header className="Searchbar">
//         <form className="SearchForm" onSubmit={this.handleSubmit}>
//           <button type="submit" className="SearchForm-button">
//             <span className="SearchForm-button-label">Search</span>
//           </button>

//           <input
//             value={this.state.text}
//             onChange={this.handleChange}
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }
