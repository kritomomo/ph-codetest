import { act, renderHook } from '@testing-library/react-hooks';
import useNavbar from './useNavbar';

describe('useNavbar', () => {
  it('should use navbar', () => {
    const { result } = renderHook(() => useNavbar());
    expect(result.current.anchorEl).toBe(null);

    act(() => {
      result.current.handleClose();

    });
    expect(result.current.anchorEl).toBe(null)
  });
  it('should change anchorEl state when trigger handleClick function', () => {
    const { result } = renderHook(() => useNavbar());
    act(() => {
      result.current.handleClick({currentTarget: 'currentTarget'} as React.MouseEvent<HTMLButtonElement>);
    });
    expect(result.current.anchorEl).toBe("currentTarget")
  });
})