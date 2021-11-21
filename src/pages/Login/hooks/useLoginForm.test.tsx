import { act, renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useLoginForm from './useLoginForm';

const url = 'http://localhost:8080/api/v1/login';

describe('login hooks', () => {

  it('should login success', async () => {
    const mock = new MockAdapter(axios);
    mock.onPost(url).reply(200, { id: 1 });

    const { result, waitForNextUpdate } = renderHook(() => useLoginForm());
    act(() => {
      result.current.handleOnSubmit({ username: 'user@gmail.com', password: 'password12345' });
    });
    await waitForNextUpdate();
    expect(result.current.success).toEqual(true);
  });

  it('should login unsuccessful and show error message', async () => {
    const mock = new MockAdapter(axios);
    mock.onPost(url).reply(401);
    const { result, waitForNextUpdate } = renderHook(() => useLoginForm());
    act(() => {
      result.current.handleOnSubmit({ username: 'user@gmail.com', password: 'password' });
    });
    await waitForNextUpdate();
    expect(result.current.error).toEqual(true);
   
  });

  it('should show password', async () => {
    const { result } = renderHook(() => useLoginForm());
    expect(result.current.showPassword).toBe(false);

    act(() => {
      result.current.handleShowPassword();
    });
    expect(result.current.showPassword).toBe(true);
  })
});