import React, { Component } from 'react';

class Filter extends Component {
  render(){
    return (
      <div>
        <label htmlFor='print_type'>Print Type:</label>
        <select name='print_type_filter' id='print_type'>
          <option value='all'>All</option>
          <option value='books'>Books</option>
          <option value='magazines'>Magazines</option>
        </select>
        <label htmlFor='book_type'>Book Type:</label>
        <select name='book_type_filter' id='book_type'>
          <option value='none'>No filter</option>
          <option value='ebooks'>eBooks</option>
          <option value='free-ebooks'>Free eBooks</option>
          <option value='full'>Full</option>
          <option value='paid-ebooks'>Paid eBooks</option>
          <option value='partial'>Partial</option>
        </select>
      </div>
    );
  }
}

export default Filter;