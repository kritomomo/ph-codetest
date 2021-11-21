import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Login from './Login';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as history from 'react-router';

describe('Login', () => {
  const url = 'http://localhost:8080/api/v1/login';

  it('should show message when empty input', async() => {
    render(
      <MemoryRouter>
        <Login/>
      </MemoryRouter>
    );
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', {name: /Login/i});
    
    act(() => {
      fireEvent.change(usernameInput, { target: { value: '' } });
      fireEvent.change(passwordInput, { target: { value: '' } });
    })
    fireEvent.click(loginButton);

    expect(await screen.findByText('Username Required')).toBeInTheDocument();
    expect(await screen.findByText('Password Required')).toBeInTheDocument();
  });

  it('should return to former page when click cancel button', () => {
    const navigate = jest.fn();
    jest.spyOn(history, 'useNavigate').mockReturnValue(navigate);
    render(
      <MemoryRouter>
        <Login/>
      </MemoryRouter>
    );
    const cancelButton = screen.getByRole('button', {name: /Cancel/i});
    fireEvent.click(cancelButton);
    expect(navigate).toBeCalledWith(-1);
  });

  it('should show error message when login failed', async () => {

    const mock = new MockAdapter(axios);
    mock.onPost(url).reply(401);
    render(
      <MemoryRouter>
        <Login/>
      </MemoryRouter>
    ); 
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', {name: /Login/i});

    act(() => {
      fireEvent.change(usernameInput, { target: { value: 'user' } });
      fireEvent.change(passwordInput, { target: { value: 'password' } });
    })
    fireEvent.click(loginButton);

    expect(await screen.findByText('Username or Password is incorrect')).toBeInTheDocument();
  });

  it('should show success message when login success', async () => {
    const mock = new MockAdapter(axios);
    mock.onPost(url).reply(200, { id: 1 });
    render(
      <MemoryRouter>
        <Login/>
      </MemoryRouter>
    );
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', {name: /Login/i});

    act(() => {
      fireEvent.change(usernameInput, { target: { value: 'user@gmail.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password12345' } });
    })
    fireEvent.click(loginButton);

    expect(await screen.findByText('Login Success')).toBeInTheDocument();
  });

  it('should show password when click the eye button', async() => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const eyeButton = screen.getByTestId('eye-button');
    const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement;

    await act(async() => {
      fireEvent.change(passwordInput, { target: { value: 'password12345' } });
      fireEvent.click(eyeButton); 
    })

    expect(passwordInput.type).toBe("text"); 
  });
})