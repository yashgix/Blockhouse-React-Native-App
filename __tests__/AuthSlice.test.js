// __tests__/AuthSlice.test.js

import reducer, { 
  loginSuccess, 
  loginFailure, 
  logout 
} from '../src/redux/authSlice';

describe('Authentication Slice', () => {
  // Define the initial state
  const initialState = {
    user: null,
    isAuthenticated: false,
    error: null
  };

  // Test that the reducer returns the initial state when no action is provided
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  // Test the loginSuccess action
  it('should handle loginSuccess', () => {
    const user = { email: 'test@example.com' };
    const action = loginSuccess(user);
    const state = reducer(initialState, action);

    expect(state).toEqual({
      user,
      isAuthenticated: true,
      error: null
    });
  });

  // Test the loginFailure action 
  it('should handle loginFailure', () => {
    const errorMessage = 'Invalid credentials';
    const action = loginFailure(errorMessage);
    const state = reducer(initialState, action);

    expect(state).toEqual({
      user: null,
      isAuthenticated: false,
      error: errorMessage
    });
  });

  // Test the logout action
  it('should handle logout', () => {
    const loggedInState = {
      user: { email: 'test@example.com' },
      isAuthenticated: true,
      error: null
    };

    const action = logout();
    const state = reducer(loggedInState, action);

    expect(state).toEqual(initialState);
  });
});