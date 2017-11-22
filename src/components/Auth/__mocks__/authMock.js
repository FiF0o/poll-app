import {initialState} from '../../../initialState';
const {auth, isLoading, errorMessage} = initialState;

export const authMock = {
  auth,
  signIn: jest.fn(),
  signOut: jest.fn(),
  isLoading,
  errorMessage
}
