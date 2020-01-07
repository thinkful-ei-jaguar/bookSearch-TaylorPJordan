import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';

describe('Book Component', ()=>{
  it('renders with empty div', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Book />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});