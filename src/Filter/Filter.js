import React, { Component } from 'react';

class Filter extends Component {
  changePrintSelection(value) {
    if(value==='all') {
      this.props.changePrintType(null);
    } else {
      this.props.changePrintType(value);
      // const printType = this.props.booklist.volumeInfo.printType.filter(type => type===value);
      // this.props.changePrintType(printType);
    }
  };

  changeBookSelection(value) {
    if(value==='none') {
      this.props.changeBookType(null);
      this.props.changeViewability(null);
    }
    else if(value==='ebooks'||value==='paid-ebooks'||value==='free-ebooks') {
      this.props.changeBookType(true);
      this.props.changeViewability(null);
      // const printType = this.props.booklist.volumeInfo.printType.filter(type => type===value);
      // this.props.changePrintType(printType);
    }
    else if(value==='ALL_PAGES'){
      this.props.changeBookType(false);
      this.props.changeViewability(value);
    }
    else if(value==='PARTIAL'){
      this.props.changeBookType(false);
      this.props.changeViewability(value);
    }
  }

  render(){
    return (
      <div>
        <label htmlFor='print_type'>Print Type:</label>
        <select name='print_type_filter' id='print_type' onChange={e=>this.changePrintSelection(e.target.value)} >
          <option value='all'>All</option>
          <option value='BOOK'>Books</option>
          <option value='MAGAZINE'>Magazines</option>
        </select>
        <label htmlFor='book_type'>Book Type:</label>
        <select name='book_type_filter' id='book_type' onChange={e=>this.changeBookSelection(e.target.value)}>
          <option value='none'>No filter</option>
          <option value='ebooks'>eBooks</option>
          <option value='free-ebooks'>Free eBooks</option>
          <option value='ALL_PAGES'>Full</option>
          <option value='paid-ebooks'>Paid eBooks</option>
          <option value='PARTIAL'>Partial</option>
        </select>
      </div>
    );
  }
}

export default Filter;