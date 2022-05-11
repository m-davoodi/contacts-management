import { CssBaseline, ThemeProvider } from '@mui/material';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainContainer } from 'src/core/container';
import { light, ThemeControlProvider } from 'src/core/theme';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={light}>
        <CssBaseline />
        <ThemeControlProvider>
          <MainContainer />
        </ThemeControlProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
