import React from 'react'
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

import { UserAvatar } from './'

describe('<UserAvatar /> component', () => {
    let component
    let stub
    // const noop = (e) => e

    beforeEach(() => {
        stub = {
            user: {
                photoURL: '',
                email: '',
                uid: '',
                displayName: ''
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

    it('should render correctly', () => {
        const uStub = {
            user: {
                photoURL: 'abc.jpg',
                email: 'a@mail.com',
                uid: 'qwe',
                displayName: 'aaa'
            }
        }
        const tree = renderer.create(
            <MuiThemeProvider>
                <UserAvatar {...uStub} />
            </MuiThemeProvider>
          ).toJSON();
          expect(tree).toMatchSnapshot();
    })

})
