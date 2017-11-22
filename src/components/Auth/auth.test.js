import React from 'react';
import {shallow} from 'enzyme';
import {Auth} from './';
import {authMock} from './__mocks__/authMock';

describe('<Auth /> component', () => {
  it('should render correctly', () => {
    const stub = {
      ...authMock
    }
    const wrapper = shallow(<Auth {...stub}/>);

    expect(wrapper.length).toEqual(1);
  });
});