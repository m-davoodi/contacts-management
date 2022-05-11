import { useTheme } from '@mui/material';

/**
 * @returns: boolean weather the viewport is a mobile
 */
export const useMobileDetector = (): boolean => {
  const theme = useTheme();
  return window.innerWidth < theme.breakpoints.values.sm;
};
