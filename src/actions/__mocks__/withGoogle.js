const signInGoogleMock = jest.fn()
exports.withGoogle = () => signInGoogleMock;