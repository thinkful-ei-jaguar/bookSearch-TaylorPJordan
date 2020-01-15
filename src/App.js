import React, { Component } from 'react';
import Header from './Header/Header';
import BookList from './BookList/BookList';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      booklist: [],
      searchTerm: '',
      loading: false,
      error: null,
      // filtering: false,
      printType: 'all',
      bookType: null,
    }
  }

  setSearchTerm = (term, e) => {
    let newTerm = term.toLowerCase();
    this.setState({
      searchTerm: newTerm
    })
  }

  setPrintType = (printType) =>{
    this.setState({
      printType
    });
  }

  setBookType = (bookType) =>{
    this.setState({
      bookType
    });
  }

  setBookslist = (response) => {
    this.setState({
      booklist: response
    })
  }

  getBooks = (event) => {
    event.preventDefault();
    const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}`;
    const filter = this.state.bookType === null ? '' : `&filter=${this.state.bookType}`;
    const printType = `&printType=${this.state.printType}`
    const url = baseUrl + filter + printType;

    console.log('Url formatted:', url);
    fetch(url)
      .then(res => {
        if(!res.ok){
          throw new Error(res.statusText);
        } return res.json();
      })
      .then(response => {
        console.log('Response.items:', response.items);
        this.setBookslist(response.items)
      })
      .catch(err => console.log(err.message))
  }

  render(){
    return (
      <>
        <Header 
        getBooks={e => this.getBooks(e)}
        changePrintType={printType=>this.setPrintType(printType)}
        changeBookType={bookType=>this.setBookType(bookType)}
        changeSearchTerm={term=>this.setSearchTerm(term)}
         />
        <BookList books={this.state.booklist}
        filteredBooks={this.state.filteredBooks}
        searchTerm={this.state.searchTerm} 
        printType={this.state.printType}
        isEbook={this.state.isEbook}
        viewability={this.state.viewability}/>
      </>
      
    );
  }
}

export default App;
