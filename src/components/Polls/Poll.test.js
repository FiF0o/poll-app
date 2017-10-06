import React from 'react'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import { shallow } from 'enzyme'

import { Poll } from './Poll'
import { UserAvatar } from '../Avatars';
import { Votes } from '../Votes'

const defaultProps = {
    pollKey: '',
    name: '',
    description: 'blabla',
    author: '',
    id: '123',
    auth: 'qwe',
    pollUid: '123',
    user: '',
    onDeletePoll: jest.fn(),
    addVote: jest.fn(),
    removeVote: jest.fn(),
    polls: [],
}

describe(' <Poll /> component', () => {
    it('should render self', () => {
        const props = {
            ...defaultProps
        }
        const wrapper = shallow(<Poll {...props}/>)

        expect(wrapper.length).toBe(1)
    })

    it('should render <UserAvatar> subcomponent', () => {
        const props = {
            ...defaultProps
        }
        const wrapper = shallow(<Poll {...props}/>)

        expect(wrapper.find(UserAvatar).length).toBe(1)
    })

    it('should render <Votes> subcomponent', () => {
        const props = {
            ...defaultProps
        }
        const wrapper = shallow(<Poll {...props}/>)

        expect(wrapper.find(Votes).length).toBe(1)
    })

    it('should render the Poll description', () => {
        const props = {
            ...defaultProps
        }
        const wrapper = shallow(<Poll {...props}/>)

        expect(wrapper.find(CardText).length).toBe(1)
    })

})
