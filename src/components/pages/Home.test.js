
import React from 'react'
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import {history as RouterHistory} from '../../store';
import {Home} from './Home';
import {store} from '../../store';

function setup() {
    return renderer.create(
        <MuiThemeProvider>
            <Provider store={store} >
                <ConnectedRouter history={RouterHistory} >
                    <Home />                    
                </ConnectedRouter>
            </Provider>
        </MuiThemeProvider>
      ).toJSON();
}

describe('<Home />', () => {
    it('should render correctly', () => {
        const wrapper = setup()
          expect(wrapper).toMatchSnapshot();
    });
});