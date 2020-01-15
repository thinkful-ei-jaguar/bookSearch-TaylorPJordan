import React, { Component } from 'react';
import Filter from '../Filter/Filter';

class Header extends Component {
  render(){
    return(
      <header>
        <div className='title' >
          <h1>Google Book Search</h1>
        </div>
        <Filter 
        getBooks={this.props.getBooks}
        searchTerm={this.props.changeSearchTerm}
        changePrintType={this.props.changePrintType}
        changeBookType={this.props.changeBookType}
        />
      </header>
    );
  }
}

export default Header;