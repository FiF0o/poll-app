
import React from 'react'
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme'
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NewPollContainer from '../../containers/NewPollContainer';
import PollsContainer from '../../containers/PollsContainer';
import PollPage from './PollPage';
import {store} from '../../store';

function setup() {
    return renderer.create(
        <MuiThemeProvider>
            <Provider store={store} >
                <PollPage />
            </Provider>
        </MuiThemeProvider>
      ).toJSON();
};

describe('<PollPage />', () => {
    it('should render correctly', () => {
        const wrapper = setup()
          expect(wrapper).toMatchSnapshot();
    });
});