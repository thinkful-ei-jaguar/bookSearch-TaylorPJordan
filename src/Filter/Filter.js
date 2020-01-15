import React, { Component } from 'react';

class Filter extends Component {
  changePrintSelection(value) {
    this.props.changePrintType(value);
  };

  changeBookSelection(value) {
    if(value==='none') {
      this.props.changeBookType(null);
    }
    else {
      this.props.changeBookType(value);
    }
  }

  render(){
    return (
      <div>
        <form name='searchbar_form' className='searchbar_form' onSubmit={e => this.props.getBooks(e)}>
          <label htmlFor='searchbar_box'>
            Search:
          </label>
          <input type='text' placeholder='keyword' id='searchbar_box' required onChange={e=>this.props.searchTerm(e.target.value)}>
          </input>
          
      

          <label htmlFor='print_type'>Print Type:</label>
          <select name='print_type_filter' id='print_type' onChange={e=>this.changePrintSelection(e.target.value)} >
            <option value='all'>All</option>
            <option value='books'>Books</option>
            <option value='magazines'>Magazines</option>
          </select>

          <label htmlFor='book_type'>Book Type:</label>
          <select name='book_type_filter' id='book_type' onChange={e=>this.changeBookSelection(e.target.value)}>
            <option value='none'>No filter</option>
            <option value='ebooks'>eBooks</option>
            <option value='free-ebooks'>Free eBooks</option>
            <option value='full'>Full</option>
            <option value='paid-ebooks'>Paid eBooks</option>
            <option value='partial'>Partial</option>
          </select>

          <button type='submit' name='searchbar_submit'  >Search</button>
        </form>
      </div>
    );
  }
}

export default Filter;