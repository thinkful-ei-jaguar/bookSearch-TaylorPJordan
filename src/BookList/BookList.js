import React, { Component } from 'react';
import Book from '../Book/Book';

class BookList extends Component {

  render(){
    console.log(this.props);
    return(
      <>
      <Book />
      <Book />
      <Book />
      </>
    );
  }
}

export default BookList;