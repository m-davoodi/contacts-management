import { CssBaseline } from '@mui/material';
import { DecoratorFunction } from '@storybook/addons';
import { DrawerProvider } from 'src/core/layout/app-drawer';

export const drawerDecorator: DecoratorFunction<JSX.Element> = (Story, context) => {
  return (
    <DrawerProvider>
      <CssBaseline />
      <Story {...context} />
    </DrawerProvider>
  );
};
