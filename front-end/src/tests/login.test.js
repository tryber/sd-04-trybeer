import React from 'react';
import {
  fireEvent, wait, screen, act,
} from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import LoginForm from '../components/forms/LoginForm';
import * as API from '../services/TrybeerApi';

jest.mock('../services/TrybeerApi.js');

const resolveLogin = Promise.resolve({
  data: {
    token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkxlYW5kcm8gTWFydGVuIiwiZW1haWwiOiJ1c2VyQHRlc3QuY29tIiwicm9sZSI6ImNsaWVudCIsImlhdCI6MTYwNTkwNTU5NSwiZXhwIjoxNjA1OTA3Mzk1fQ.ITr3r3wD2O3QRLufNDddhW3rrnHSO9389CCHh9C_7uk',
    userData: {
      id: 2,
      name: 'Leandro Marten',
      email: 'user@test.com',
      role: 'client',
    },
  },
});

API.postLogin = jest.fn(() => resolveLogin);

const mocks = {
  user: {
    email: 'user@test.com',
    name: 'Trybeer',
    role: 'client',
  },
};

describe('Login Page', () => {
  it('Renderiza HTML', () => {
    const { getByLabelText, getByText, getByRole } = renderWithRouter(
      <LoginForm />,
    );
    const inputEmail = getByLabelText('Email:');
    const inputPassword = getByLabelText('Password:');
    const message = getByText(/Ainda não tenho conta/);
    const btn = getByRole('button');
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  it('Inputs e Button', async () => {
    const { queryByTestId, history } = renderWithRouter(<LoginForm />);
    const emailInput = queryByTestId('email-input');
    const pwdInput = queryByTestId('password-input');
    const btn = queryByTestId('signin-btn');

    expect(btn).toBeDisabled();

    fireEvent.change(emailInput, { target: { value: mocks.user.email } });
    expect(emailInput.value).toBe(mocks.user.email);

    fireEvent.change(pwdInput, { target: { value: 'test123' } });
    expect(pwdInput.value).toBe('test123');

    expect(btn).toBeEnabled();

    fireEvent.click(btn);
    await act(() => resolveLogin);
    expect(API.postLogin).toHaveBeenCalledTimes(1);
    expect(history.location.pathname).toBe('/products');
  });
});
