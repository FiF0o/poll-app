import errors from './errors';
import {initialState} from '../initialState';
import {errorMock} from './__mocks__/errors';

describe('errors reducer', () => {

  it('should have a default state' , () => {
    expect(
      errors(initialState.errors, {})
    )
    .toEqual(null);
  });

  it(`should handle 'HAS_ERRORED' state`, () => {
    expect(
      errors({}, {type: 'HAS_ERRORED', errorMessage: errorMock})
    )
    .toEqual({errorMessage: errorMock});
  });

});
