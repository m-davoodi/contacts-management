import { renderHook } from '@testing-library/react-hooks';
import { useMobileDetector } from './useMobileDetector';

describe('use mobile detector', () => {
  test('should return true when viewport is mobile', () => {
    const { result } = renderHook(() => {
      global.innerWidth = 300;
      const isMobile = useMobileDetector();
      return { isMobile };
    });
    expect(result.current.isMobile).toBe(true);
  });
  test('should return false when viewport is not mobile', () => {
    const { result } = renderHook(() => {
      global.innerWidth = 1024;
      const isMobile = useMobileDetector();
      return { isMobile };
    });
    expect(result.current.isMobile).toBe(false);
  });
});
