const thunk = require('./__mocks__/thunk');
import {userMiddleware} from './userMiddleware';

describe('userMiddleware', () => {
    
    it(`passes through non-function action`, () => {
        const { next, invoke } = thunk.__createMw(userMiddleware)
        const action = {type: 'ADDING_VOTE'}
        invoke(action)
        expect(next).toHaveBeenCalledWith(action)
      });
});
