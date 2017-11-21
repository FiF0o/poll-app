import {signinWithGoogle} from './signinWithGoogle';

jest.mock('./signinWithGoogle');

describe('signinWithGoogle util', () => {
  it('should return a firebase function', () => {
    const cb = signinWithGoogle()
    expect(cb.mock.calls.length).toBe(0);
    cb();
    expect(cb.mock.calls.length).toBe(1);
  });
});

