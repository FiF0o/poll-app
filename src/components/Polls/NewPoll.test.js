import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NewPoll from './NewPoll';
import {styles} from './styles';

const defaultProps = {
    auth: {
        uid: '123',
        displayName: 'firstname'
    }
}

describe(' <NewPoll /> component', () => {
    it('should render self and its subcomponents', () => {
        const sProps = {
            ...defaultProps,
            auth: {
                uid: '456',
                displayName: 'foo'
            }
        }
        
        const tree = renderer.create(
            <MuiThemeProvider>
                <NewPoll {...sProps} />
            </MuiThemeProvider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})