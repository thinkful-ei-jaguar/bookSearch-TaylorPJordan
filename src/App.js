import React, { Component } from 'react';
import Header from './Header/Header';
import BookList from './BookList/BookList';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      booklist: [
        {
          id:'234567',
          volumeInfo:
            {title: 'Harry Potter',
            author: ['JK Rowling'],
            description: 'yer a wizard harry',
            printType: 'BOOK',
            imageLink:{
            smallThumbnail: 'url'
            }
            },
          saleInfo:
          {isEbook: false,
          retailPrice:{
            amount: 5,
            currencyCode: 'US Dollars'
          }
          },
          accessInfo:
           {viewability:'ALL_PAGES'}
        },
        {
          id:'234967',
          volumeInfo:
            {title: 'Harry Potter II',
            author: ['JK Rowling'],
            description: 'yer a wizard harry..AGAIN',
            printType: 'MAGAZINE',
            imageLink:{
            smallThumbnail: 'url'
            }
            },
          saleInfo:
          {isEbook: true,
          retailPrice:{
            amount: 30,
            currencyCode: 'US Dollars'
          }
          },
          accessInfo:
           {viewability:'PARTIAL'}
        }
      ],
      loading: false,
      error: null,
      printType: null,
      isEbook: null,
      viewability: null
    }
  }

  setPrintType = (printType) =>{
    this.setState({
      printType
    });
  }

  setBookType = (isEbook) =>{
    this.setState({
      isEbook
    });
  }

  setViewability = (value) =>{
    this.setState({
      viewability: value
    })
  }

  render(){
    return (
      <>
        <Header 
        changePrintType={printType=>this.setPrintType(printType)}
        changeBookType={bookType=>this.setBookType(bookType)}
        changeViewability={viewability=>this.setViewability(viewability)}
         />
        <BookList books={this.state.booklist} />
      </>
      
    );
  }
}

export default App;
