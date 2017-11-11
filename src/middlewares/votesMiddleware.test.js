const thunk = require('./__mocks__/thunk');
import {votesMiddleware} from './votesMiddleware';

describe('votesMiddleware', () => {
    
    it(`passes through non-function action`, () => {
        const { next, invoke } = thunk.__createMw(votesMiddleware)
        const action = {type: 'ADDING_VOTE'}
        invoke(action)
        expect(next).toHaveBeenCalledWith(action)
      });
      
      // it('calls the function', () => {
      //   const { invoke } = thunk.__createMw()
      //   const fn = jest.fn()
      //   invoke(fn)
      //   expect(fn).toHaveBeenCalled()
      // });
      
    //   it('passes dispatch and getState', () => {
    //     const { store, invoke } = thunk.create()
    //     invoke((dispatch, getState) => {
    //       dispatch('ADDING_VOTE')
    //       getState();
    //     })
    //     expect(store.dispatch).toHaveBeenCalledWith('ADDING_VOTE')
    //     expect(store.getState).toHaveBeenCalled()
    //   });
});
