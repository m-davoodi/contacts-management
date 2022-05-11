import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { DecoratorFunction } from '@storybook/addons';
import { dark, light } from 'src/core/theme';

export const themeDecorator: DecoratorFunction<JSX.Element> = (Story, context) => {
  const theme: PaletteMode = context.globals.theme;
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <CssBaseline />
      <Story {...context} />
    </ThemeProvider>
  );
};
