import { CssBaseline, PaletteMode, ThemeProvider, useMediaQuery } from '@mui/material';
import * as React from 'react';
import { dark, light } from './themes';

interface ThemeControlToggleContextType {
  togglePaletteMode: (paletteMode?: PaletteMode) => void;
}

const ThemeControlContextToggle = React.createContext<ThemeControlToggleContextType | null>(null);

export function useTogglePaletteMode(): ThemeControlToggleContextType {
  const context = React.useContext(ThemeControlContextToggle);
  if (context === null) {
    throw new Error('useTogglePaletteMode must be used inside the <ThemeControlProvider/>');
  }
  return context;
}

export interface ThemeControlProviderProps {
  paletteMode?: PaletteMode;
  children: React.ReactNode;
}

export const ThemeControlProvider: React.FC<ThemeControlProviderProps> = (props) => {
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)');
  /*
   * default paletteMode priority:
   *  - first checking for coming `props.paletteMode` if existed.
   *  - if `props.paletteMode` not exist, check for `prefers-color-scheme` media query
   *  - if none of above conditions aren't fulfilled, the dark is considered
   */
  const [paletteMode, setPaletteMode] = React.useState<PaletteMode>(
    props?.paletteMode ?? (prefersLightMode ? 'light' : 'dark'),
  );

  const togglePaletteMode = (paletteMode?: PaletteMode) => {
    setPaletteMode((prev) => paletteMode ?? (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeControlContextToggle.Provider value={{ togglePaletteMode }}>
      <ThemeProvider theme={paletteMode === 'light' ? light : dark}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ThemeControlContextToggle.Provider>
  );
};
