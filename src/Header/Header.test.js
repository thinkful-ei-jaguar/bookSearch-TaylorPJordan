import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './Header';

describe('Header Component', ()=>{
  it('renders with empty div', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders header as is', ()=>{
    const wrapper = shallow(<Header />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
});