import isLoading from './isLoading';
import {initialState} from '../initialState';

describe('isLoading reducer', () => {

  it('should have a default state' , () => {
    expect(
      isLoading(initialState.isLoading, {})
    )
    .toEqual(false);
  });

  it(`should handle 'ATTEMPT_LOGIN'` , () => {
    expect(
      isLoading(initialState.isLoading, {type: 'ATTEMPT_LOGIN'})
    )
    .toEqual(true);
  });

  it(`should handle 'LOG_IN' and 'HAS_ERRORED' states`, () => {
    expect(
      isLoading({}, {type: 'LOG_IN'})
    )
    .toBe(false);

    expect(
      isLoading({}, {type: 'HAS_ERRORED'})
    )
    .toBe(false);

  });

});
