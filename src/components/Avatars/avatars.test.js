import React from 'react'
import { shallow } from 'enzyme'
import List from 'material-ui/List/List'
import { UserAvatar } from './'

describe('<UserAvatar /> component', () => {
    let component
    let stub
    // const noop = (e) => e

    beforeEach(() => {
        stub = {
            user: {
                photoURL: 'a',
                email: 'a',
                uid: 'a',
                displayName: 'a'
            }
        }
        component = shallow(
            <UserAvatar {...stub} />
        )
    })

    it('should render a <UserAvatar />', () => {
    //    expect(component.find(List).length).toBe(1)
       expect(component.containsMatchingElement(List)).toBe(true)
    })

})
