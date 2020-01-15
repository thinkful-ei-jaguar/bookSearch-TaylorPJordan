import React, { Component } from 'react';
import Filter from '../Filter/Filter';
import './Header.css';

class Header extends Component {
  render(){
    return(
      <header className='header'>
        <div className='title' >
          <h1>Google Book Search</h1>
        </div>
        <div className='searchFilter'>
        <Filter 
        getBooks={this.props.getBooks}
        searchTerm={this.props.changeSearchTerm}
        changePrintType={this.props.changePrintType}
        changeBookType={this.props.changeBookType}
        />
        </div>
      </header>
    );
  }
}

export default Header;