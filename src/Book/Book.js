import React, {Component} from 'react';

class Book extends Component {
  render(){
    return(
      <div className='book_item'>
        <h2 className='book_title'>Henry I</h2>
        <img href='#' alt='Cover of book' className='book_img'/>
        <div className='book_info'>
          <p className='author'>Author: C. Warren Hollister</p>
          <p className='price'>Price: $50.00</p>
          <p className='description'>Description</p>
        </div>
      </div>
    );
  }
}

export default Book;