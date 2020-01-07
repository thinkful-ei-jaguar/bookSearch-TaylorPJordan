import React, { Component } from 'react';
import Book from '../Book/Book';

class BookList extends Component {
  
  render(){
    console.log(this.props);
    const {searchTerm, printType, isEbook, viewability} = this.props;

    const book = this.props.books.filter((book) => book.volumeInfo.title.includes(searchTerm))


    .map((book) => 
      <Book key={book.accessInfo.id} id={book.accessInfo.id} title={book.volumeInfo.title} image={book.volumeInfo.imageLink.smallThumbnail} author={book.volumeInfo.author} price={book.saleInfo.retailPrice.amount} desc={book.volumeInfo.description}/>
    )

    return(
      <>
      {book}
      </>
    );
  }
}

export default BookList;