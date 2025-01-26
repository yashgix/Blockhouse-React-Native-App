// __tests__/AuthSlice.test.js
import reducer, { 
    loginSuccess, 
    loginFailure, 
    logout 
  } from '../src/redux/authSlice';
  
  describe('Authentication Slice', () => {
    const initialState = {
      user: null,
      isAuthenticated: false,
      error: null
    };
  
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });
  
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