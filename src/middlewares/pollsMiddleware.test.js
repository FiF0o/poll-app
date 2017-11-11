const thunk = require('./__mocks__/thunk');
import {pollsMiddleware} from './pollsMiddleware';

describe('pollsMiddleware', () => {
    
    it(`passes through non-function action`, () => {
        const { next, invoke } = thunk.__createMw(pollsMiddleware)
        const action = {type: 'ADDING_VOTE'}
        invoke(action)
        expect(next).toHaveBeenCalledWith(action)
      });
});
