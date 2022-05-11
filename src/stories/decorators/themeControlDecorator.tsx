import { CssBaseline } from '@mui/material';
import { DecoratorFunction } from '@storybook/addons';
import { ThemeControlProvider } from 'src/core/theme';

export const themeControlDecorator: DecoratorFunction<JSX.Element> = (Story, context) => {
  return (
    <ThemeControlProvider>
      <CssBaseline />
      <Story {...context} />
    </ThemeControlProvider>
  );
};
