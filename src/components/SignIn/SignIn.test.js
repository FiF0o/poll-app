import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {isUserLogged} from '../../utils/UserAuth';
import SignIn from './SignIn';

const defaultProps = {
    auth: '123',
    signIn: null,
    signOut: null
}

describe(' <SignIn /> component', () => {
    it('should render self and its subcomponents', () => {
        const sProps = {
            ...defaultProps,
            auth: 'abc',
            signIn: jest.fn(),
            signOut: jest.fn()
        }
        
        const tree = renderer.create(
            <MuiThemeProvider>
                <SignIn {...sProps} />
            </MuiThemeProvider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})