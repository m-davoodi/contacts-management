import { Breakpoint, createTheme as createMuiTheme, PaletteMode, responsiveFontSizes, Theme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    appDrawer: {
      width: number;
      breakpoint: Breakpoint;
    };
    custom: {
      palette: {
        iconColor: React.CSSProperties['color'];
      };
    };
  }
  interface ThemeOptions {
    appDrawer: {
      width: React.CSSProperties['width'];
      breakpoint: Breakpoint;
    };
    custom: {
      palette: {
        iconColor: React.CSSProperties['color'];
      };
    };
  }
}

function createTheme(mode: PaletteMode): Theme {
  return createMuiTheme({
    appDrawer: {
      width: 280,
      breakpoint: 'md',
    },
    palette:
      mode === 'light'
        ? {
            mode: 'light',
            primary: {
              main: '#8bc34a',
              light: '#a2cf6e',
              dark: '#618833',
            },
            secondary: {
              main: '#009688',
              light: '#52c7b8',
              dark: '#00675b',
            },
            background: {
              default: '#f8f8f8',
            },
          }
        : {
            mode: 'dark',
            primary: {
              main: '#263238',
              light: '#4f5b62',
              dark: '#000a12',
            },
            secondary: {
              main: '#212121',
              light: '#484848',
              dark: '#000000',
            },
          },

    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    custom: {
      palette: {
        iconColor: mode === 'light' ? '#5f6368' : '#fff',
      },
    },
  });
}

export const light = responsiveFontSizes(createTheme('light'));
export const dark = responsiveFontSizes(createTheme('dark'));
