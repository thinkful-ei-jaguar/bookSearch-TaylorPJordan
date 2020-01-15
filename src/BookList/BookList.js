import React, { Component } from 'react';
import Book from '../Book/Book';

class BookList extends Component {
  
  render(){
    console.log(this.props);

    const books = this.props.books.map((book) => 
      <Book key={book.id} id={book.id} title={book.volumeInfo.title} image={book.volumeInfo.imageLinks.smallThumbnail} author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Not Provided'} buy={book.saleInfo.buyLink} desc={book.volumeInfo.description}/>
    )

    return(
      <>
      {books}
      </>
    );
  }
}

export default BookList;

//.filter((book) => book.volumeInfo.title.toLowerCase().includes(searchTerm))
