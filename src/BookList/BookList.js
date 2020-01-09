import React, { Component } from 'react';
import Book from '../Book/Book';

class BookList extends Component {
  
  render(){
    console.log(this.props);
    const {searchTerm, printType, isEbook, viewability} = this.props;
    

    let filterBooks = ()=>{
      if(searchTerm==='' && printType===null && isEbook===null && viewability===null){
      return this.props.books.map((book) => 
      <Book key={book.accessInfo.id} id={book.accessInfo.id} title={book.volumeInfo.title} image={book.volumeInfo.imageLink.smallThumbnail} author={book.volumeInfo.author} price={book.saleInfo.retailPrice.amount} desc={book.volumeInfo.description}/>
    )
      }
      else if(searchTerm){
      return this.props.books.filter((book) => book.volumeInfo.title.toLowerCase().includes(searchTerm)).map((book) => 
      <Book key={book.accessInfo.id} id={book.accessInfo.id} title={book.volumeInfo.title} image={book.volumeInfo.imageLink.smallThumbnail} author={book.volumeInfo.author} price={book.saleInfo.retailPrice.amount} desc={book.volumeInfo.description}/>
    )
      }
      else if(books.volumeInfo.printType===printType){

      }

    }

    const books = this.props.books.map((book) => 
      <Book key={book.accessInfo.id} id={book.accessInfo.id} title={book.volumeInfo.title} image={book.volumeInfo.imageLink.smallThumbnail} author={book.volumeInfo.author} price={book.saleInfo.retailPrice.amount} desc={book.volumeInfo.description}/>
    )

    
  
    let filterBOOKS = (books) => {
      let newBooks=[];
      for (let i=0; i<books.length; i++){
        if(books[i].volumeInfo.printType===printType){
          newBooks = newBooks.push(books[i])
          console.log(books[i], 'printType')
        }
        else if(books[i].saleInfo.isEbook===isEbook){
          newBooks = newBooks.push(books[i])
          console.log(books[i], 'eBook')
        }
        else if(books[i].accessInfo.viewability===viewability){
          newBooks = newBooks.push(books[i])
          console.log(books[i], 'Viewability')
        }
        return newBooks;
      }
    }

    console.log(filterBOOKS(this.props.books))

    return(
      <>
      {books}
      </>
    );
  }
}

export default BookList;

//.filter((book) => book.volumeInfo.title.toLowerCase().includes(searchTerm))
