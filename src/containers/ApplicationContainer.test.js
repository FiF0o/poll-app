import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore, createMockDispatch } from 'redux-test-utils';
import ApplicationContainer from './ApplicationContainer';

const state = {
    auth: {
        status: 'ANONYMOUS',
        email: null,
        displayName: null,
        photoURL: null,
        uid: null
    },
    errors: {
    }
};

describe('<PollsContainer />', () => {
    it('should render correctly with a state tree', () => {
        const store = createMockStore(state);
        const wrapper = shallowWithStore(<ApplicationContainer />, store);

        expect(wrapper.length).toBe(1);
    });
});
