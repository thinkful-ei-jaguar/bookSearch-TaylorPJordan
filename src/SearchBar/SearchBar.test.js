import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

describe('Search Bar Component', ()=>{
  it('renders with empty div', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<SearchBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});