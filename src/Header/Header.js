import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';

class Header extends Component {
  render(){
    return(
      <header>
        <div className='title' >
          <h1>Google Book Search</h1>
        </div>
        <SearchBar />
        <Filter />
      </header>
    );
  }
}

export default Header;