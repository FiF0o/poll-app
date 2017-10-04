import React from 'react'
import { shallow } from 'enzyme'

import { Votes } from './index'
import { Vote } from './Vote'

const defaultProps = {
    voters: [],
    addVote: jest.fn(),
    removeVote: jest.fn(),
    pollId: '123',
    auth: {uid:'qwe'},
    polls: [],
}

describe(' <Votes /> component', () => {
    it('should render self and its subcomponents', () => {
        const props = {
            ...defaultProps,
            voters: [
                {voteId: 'fsf', uid: 'sdad'},
                {voteId: 'fwsf', uid: 'sdwad'}
            ],
        }
        const wrapper = shallow(<Votes {...props}/>)

        expect(wrapper.find(Vote).length).toBe(2)
    })

})
