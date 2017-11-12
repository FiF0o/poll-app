// import configureMockStore from 'redux-mock-store';
import configureStore from 'redux-mock-store'
import tick from './tick';

jest.useFakeTimers();

describe('tick initializer', () => {
    it('should dispatch actions every 3 seconds', () => {
        // mock store, empty mw and state
        const store = configureStore([])({});
       
        tick(store);
       
        expect(setInterval.mock.calls.length).toBe(1);
        expect(setInterval.mock.calls[0][1]).toBe(3000);
    });

    // it('should dispatch a TICK action type', () => {
    //     const store = configureStore([])({})
    //     tick(store);
       
    //     const actions = store.getActions()
    //     const expectedPayload = { type: 'TICK' }
        
    //     expect(actions).toEqual(expectedPayload)
    // });
});