import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { map }from 'lodash';
import {Poll} from './Poll';
import {Grid} from '../Grids/';
import {Polls} from './'

describe('<Polls /> component', () => {
    
    it('should render correctly', () => {
        const pollsStub = {
            user: {
                polls: [{name: '', description: '', author: '', uid: '', id: ''}],
                auth: 'a@mail.com',
                users: [],
                deletePoll: null,
                addVote: null,
                removeVote: null,
            }
        }
        const tree = renderer.create(
            <MuiThemeProvider>
                <Polls {...pollsStub} />
            </MuiThemeProvider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})