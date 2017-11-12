// import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import jsdom from 'jsdom';

/***********
 * Configs *
 * *********
 */
// headless browser config overrides for jest to run the tests
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

/****************
 * Mocking deps *
 * **************
 */
/** Fix global crap missing... */
// global.self = global.window;
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

// Mock firebase in browser as tests throw errors otherwise, remove --browser flag in test task
jest.mock('firebase', () => require('firebase/firebase-browser.js'));

configure({ adapter: new Adapter() });
