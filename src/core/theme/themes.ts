import { responsiveFontSizes, Theme, createTheme as createMuiTheme, PaletteMode, Breakpoint } from '@mui/material';
import { red } from '@mui/material/colors';

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
              main: '#FFF',
            },
            secondary: {
              main: '#005288',
              light: '#A7A9AC',
            },
            error: {
              main: red.A400,
            },
            background: {
              default: '#FFF',
            },
          }
        : {
            mode: 'dark',
            primary: {
              main: '#0F1112',
            },
            secondary: {
              main: '#005288',
            },
            error: {
              main: red.A400,
            },
            background: {
              default: '#0F1112',
            },
            text: {
              primary: '#E8EAED',
              secondary: '#FFFFFFDE',
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
