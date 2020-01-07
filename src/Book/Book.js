import React, {Component} from 'react';

class Book extends Component {
  render(){
    return(
      <div className='book_item' id='{this.props.id}'>
        <h2 className='book_title'>{this.props.title}</h2>
        <img href='{this.props.image}' alt='Cover of book' className='book_img'/>
        <div className='book_info'>
          <p className='author'>Author: {this.props.author}</p>
          <p className='price'>Price:     {this.props.price}</p>
          <p className='description'>{this.props.desc}</p>
        </div>
      </div>
    );
  }
}

export default Book;