import errorMessage from './errorMessage';
import {initialState} from '../initialState';
import {errorMock} from './__mocks__/errors';

describe('errorMessage reducer', () => {

  it('should have a default state' , () => {
    expect(
      errorMessage(initialState.errorMessage, {})
    )
    .toEqual(initialState.errorMessage);
  });

  it(`should handle 'HAS_ERRORED' state`, () => {
    expect(
      errorMessage({}, {type: 'HAS_ERRORED', errorMessage: errorMock})
    )
    .toEqual({errorMessage: errorMock});
  });

  it(`should handle 'CLEAR_ERROR' state`, () => {
    expect(
      errorMessage({errorMessage: errorMock}, {type: 'CLEAR_ERROR'})
    )
    .toEqual(null);
  });

});
