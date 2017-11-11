/* Mock redux-thunk - Stub Redux Middleware */
module.exports = {
    __createMw: function(middleWare) {
        const store = {
            getState: jest.fn(() => ({})),
            dispatch: jest.fn(),
        };
        const next = jest.fn()
    
        // mock MW
        const invoke = (action) => middleWare(store)(next)(action)
    
        return {store, next, invoke}
    }
};
