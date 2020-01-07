import React, {Component} from 'react';

class SearchBar extends Component {
  render(){
    return(
      <form name='searchbar_form' className='searchbar_form' >
        <label htmlFor='searchbar_box'>
          Search:
        </label>
        <input type='text' placeholder='keyword' id='searchbar_box' required>
        </input>
        <button type='submit' name='searchbar_submit'>Search</button>
      </form>
    );
  }
}

export default SearchBar;