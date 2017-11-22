import React from 'react';
import {shallowWithStore} from 'enzyme-redux';
import {createMockStore} from 'redux-test-utils';
import AuthContainer from './AuthContainer';
import {authContainerMock} from './__mocks__/authContainerMock';

describe('<Auth /> container', () => {
  it('should render correctly', () => {
    const stub = {
      ...authContainerMock
    }
    const store = createMockStore(stub);
    const wrapper = shallowWithStore(<AuthContainer/>, store);
    
    expect(wrapper.length).toEqual(1);
  });
});
