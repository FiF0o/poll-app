// import configureMockStore from 'redux-mock-store';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import tick from './tick';

const clock = jest.useFakeTimers();

describe('tick initializer', () => {
    it('should dispatch actions every 3 seconds', () => {
        // mock store, empty mw and state
        const store = configureStore([])({});
       
        tick(store);
       
        expect(setInterval.mock.calls.length).toBe(1);
        expect(setInterval.mock.calls[0][1]).toBe(3000);
        // need to restore()
    });

    it('should dispatch a TICK action type', () => {
        const store = configureStore([thunk])({})
        const expectedPayload = { type: 'TICK' }
        const cb = tick(store.dispatch(expectedPayload))
        const actions = store.getActions()
       
        expect(actions).toEqual([expectedPayload])
    });
});