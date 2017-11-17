import auth from './auth';
import {initialState} from '../initialState';
import {userMock} from './__mocks__/user';

describe('auth reducer', () => {

  it('should have a default state' , () => {
    expect(
      auth(initialState.auth, {})
    )
    .toEqual({
      status: 'ANONYMOUS',
      displayName: null,
      photoURL: null,
      email: null,
      uid: null
    });
  });

  it(`should handle 'ATTEMPT_LOGIN' state`, () => {
    expect(
      auth(
        initialState.auth, {type: 'ATTEMPT_LOGIN'})
    )
    .toEqual({
      isLoading: true
    });
  });

  it(`should handle 'LOG_IN' state`, () => {
    expect(
      auth(initialState.auth, {type: 'LOG_IN', ...userMock})
    )
    .toEqual({
      ...userMock,
      status: 'USER_LOGGED'
    });
  });

  it(`should handle 'LOGGED_OUT' state`, () => {
    expect(
      auth({...userMock},{type: 'LOGGED_OUT'})
    )
    .toEqual({
      status: 'ANONYMOUS',
      displayName: null,
      photoURL: null,
      email: null,
      uid: null
    });
  });

});
