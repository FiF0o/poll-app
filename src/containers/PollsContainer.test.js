import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
/* import undecorated Component/Container  of connect() from {Polls} Component */
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import PollsContainer from './PollsContainer';

const state = {
    polls: {
        byId: {
            'poll1': {
                name: 'poll name',
                description: 'Marv Luvvhini est un peu un vier.',
                timeStamp: Date.now() - 600,
                author: 'username 1',
                uid: 'user1',
                id: 'poll1',
                voters: [{uid: 'user2', voteId: 'vote1'}, {uid:'user3', voteId: 'vote2'}]
            }
        },
        allIds: ['poll1']
    },
    auth: {
        status: 'ANONYMOUS',
        email: null,
        displayName: null,
        photoURL: null,
        uid: null
    },
    users: {
        byId: {
            "user1": {
                displayName: "username 1",
                email: 'mail@mail.com',
                uid: 'user1',
                photoURL: 'https://placebear.com/100/100',
                // polls: ['poll1'],
                // TODO We could reference votes as well for simplicity, can't be arsed to create selectors
            }
        },
        allIds: ["user1"]
    }
};

describe('<PollsContainer />', () => {
    it('should render correctly with a state tree', () => {
        const store = createMockStore(state);
        const wrapper = shallowWithStore(<PollsContainer />, store)

        expect(wrapper.length).toBe(1);
    });
});
