import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici la logique pour traiter la recherche, par exemple, en utilisant une fonction de rappel fournie par les propriétés.
    console.log(`Recherche soumise : ${this.state.searchTerm}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="search-bar"
          name="q"
          placeholder="Recherche..."
          value={this.state.searchTerm}
          onChange={this.handleChange}
          required
        />
        <button type="submit" className='btn-svg'>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22.149" height="22.149" viewBox="0 0 22.149 22.149">
                <defs>
                    <linearGradient id="linear-gradient" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="#00beff"/>
                    <stop offset="1" stop-color="#1807ff"/>
                    </linearGradient>
                </defs>
                <path id="Icon_map-search" data-name="Icon map-search" d="M17.647,14.7A8.759,8.759,0,1,0,14.7,17.646l5.943,5.943,2.947-2.949Zm-7.468.886a5.4,5.4,0,1,1,5.406-5.4,5.412,5.412,0,0,1-5.406,5.4Z" transform="translate(-1.44 -1.44)" fill="#1800FF"/>
            </svg>
        </button>
      </form>
    );
  }
}

export default SearchBar;