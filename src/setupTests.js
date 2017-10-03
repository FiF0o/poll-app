// import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
// Mock firebase in browser as tests throw errors otherwise, remove --browser flag in test task
jest.mock('firebase', () => require('firebase/firebase-browser.js'));
configure({ adapter: new Adapter() });
