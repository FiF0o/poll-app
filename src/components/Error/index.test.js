import React from 'react';
import {shallow} from 'enzyme';
import {Error} from './';

describe('<Error /> component', () => {
  it('should render correctly', () => {
    const stub = {
      errorMessage: 'error'
    }
    const wrapper = shallow(<Error {...stub} />);
    
    expect(wrapper.length).toEqual(1);
  });
});