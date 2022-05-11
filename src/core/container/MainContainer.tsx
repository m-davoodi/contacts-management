import * as React from 'react';
import { AppBar, AppDrawer, DrawerProvider } from 'src/core/layout';
import { MainRoutes } from './MainRoutes';

export const MainContainer: React.FC = () => {
  return (
    <DrawerProvider>
      <AppBar />
      <AppDrawer />
      <main>
        <MainRoutes />
      </main>
    </DrawerProvider>
  );
};
