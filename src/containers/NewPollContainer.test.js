import React from 'react';
import { shallow } from 'enzyme';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore, createMockDispatch } from 'redux-test-utils';
import NewPollContainer from './NewPollContainer';

const state = {
    auth: {
        status: 'ANONYMOUS',
        email: null,
        displayName: null,
        photoURL: null,
        uid: null
    }
};

describe('<PollsContainer />', () => {
    it('should render correctly with a state tree', () => {
        const store = createMockStore(state);
        const wrapper = shallowWithStore(<NewPollContainer />, store);

        expect(wrapper.length).toBe(1);
    });
});
