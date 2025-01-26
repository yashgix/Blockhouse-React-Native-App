// __tests__/Login.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import LoginScreen from '../src/screens/LoginScreen';

describe('LoginScreen', () => {
  const mockNavigation = {
    replace: jest.fn(),
    navigate: jest.fn()
  };

  it('renders login screen correctly', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <LoginScreen navigation={mockNavigation} />
      </Provider>
    );

    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
  });

  it('shows validation errors for invalid input', async () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <LoginScreen navigation={mockNavigation} />
      </Provider>
    );

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    fireEvent.changeText(emailInput, 'invalid-email');
    fireEvent.changeText(passwordInput, '123');
    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(getByText('Invalid email')).toBeTruthy();
      expect(getByText('Password must be at least 8 characters')).toBeTruthy();
    });
  });

  it('navigates to home screen on successful login', async () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <LoginScreen navigation={mockNavigation} />
      </Provider>
    );

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');
    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(mockNavigation.replace).toHaveBeenCalledWith('Home');
    });
  });
});