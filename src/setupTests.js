'use strict';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';

/*******************
 * Mocking browser *
 *******************/
/**
 * Firebase requires a browser,
 * --browser flag is passed to test script
 * jsdom configuration for test runner
*/
const {JSDOM} = jsdom;
const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter((prop) => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

copyProps(window, global);


/** Firebase mocks required for tests */
// jest.mock('firebase', () => require('firebase/firebase-messaging.js'));

configure({ adapter: new Adapter() });
