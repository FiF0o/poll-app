const thunk = require('./__mocks__/thunk');
import {loginMiddleware} from './loginMiddleware';

describe('loginMiddleware', () => {
    
    it(`passes through non-function action`, () => {
        const { next, invoke } = thunk.__createMw(loginMiddleware)
        const action = {type: 'ADDING_VOTE'}
        invoke(action)
        expect(next).toHaveBeenCalledWith(action)
      });
});
