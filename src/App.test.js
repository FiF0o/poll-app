import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';

describe('<App/> component', () => {
  it('renders without crashing', (done) => {
    // timeout if crashes as browser closes straight away...
    window.setTimeout(() => {
      const wrapper = renderer.create(
        <Provider store={require('./store')}>
          <MuiThemeProvider>
            <App/>
          </MuiThemeProvider>
        </Provider>
      ).toJSON();
      expect(wrapper).toMatchSnapshot();
    }, 700);
    done();
  });
});
