import { act, renderHook } from '@testing-library/react-hooks';

import { useBooleanState } from './useBooleanState';

describe('use boolean state', () => {
  it.each([[true], [false]])('should initiate value to %j', (initialValue: boolean) => {
    const { result } = renderHook(() => {
      const [state] = useBooleanState(initialValue);
      return { state };
    });
    expect(result.current.state).toBe(initialValue);
  });

  it.each([[true], [false]])('should toggle %j value', (initialValue: boolean) => {
    const { result } = renderHook(() => {
      const [state, toggle] = useBooleanState(initialValue);
      return { state, toggle };
    });
    act(() => {
      result.current.toggle();
    });
    expect(result.current.state).toBe(!initialValue);
  });

  it.each([
    [true, true],
    [true, false],
    [false, true],
    [false, false],
  ])('should toggle value from %j to %j', (initialValue: boolean, newValue: boolean) => {
    const { result } = renderHook(() => {
      const [state, toggle] = useBooleanState(initialValue);
      return { state, toggle };
    });
    act(() => {
      result.current.toggle(newValue);
    });
    expect(result.current.state).toBe(newValue);
  });
});
