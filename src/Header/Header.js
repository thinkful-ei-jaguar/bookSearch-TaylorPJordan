import React, { Component } from 'react';
// import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';

class Header extends Component {
  render(){
    return(
      <header>
        <div className='title' >
          <h1>Google Book Search</h1>
        </div>
        {/* <SearchBar /> */}
        <Filter 
        getBooks={this.props.getBooks}
        searchTerm={this.props.changeSearchTerm}
        changePrintType={this.props.changePrintType}
        changeBookType={this.props.changeBookType}
        changeViewability={this.props.changeViewability}
        changeFiltering={this.props.changeFiltering}/>
      </header>
    );
  }
}

export default Header;