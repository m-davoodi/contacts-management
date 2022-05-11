import * as React from 'react';
import { useBooleanState, useMobileDetector } from 'src/shared/hooks';

interface DrawerContextType {
  isDrawerOpen: boolean;
}
interface DrawerStateContextType {
  toggleDrawer: (open?: boolean) => void;
}

const DrawerContext = React.createContext<DrawerContextType | null>(null);
const DrawerStateContext = React.createContext<DrawerStateContextType | null>(null);

export function useDrawer(): DrawerContextType {
  const context = React.useContext(DrawerContext);
  if (context === null) {
    throw new Error('useDrawer must be used inside the <DrawerProvider/>');
  }
  return context;
}

export function useToggleDrawer(): DrawerStateContextType {
  const context = React.useContext(DrawerStateContext);
  if (context === null) {
    throw new Error('useToggleDrawer must be used inside the <DrawerProvider/>');
  }
  return context;
}

type Props = {
  children: React.ReactNode;
};

export const DrawerProvider: React.FC<Props> = (props) => {
  const isMobile = useMobileDetector();
  const [isDrawerOpen, toggleDrawer] = useBooleanState(isMobile ? false : true);

  return (
    <DrawerStateContext.Provider value={{ toggleDrawer }}>
      <DrawerContext.Provider value={{ isDrawerOpen }}>{props.children}</DrawerContext.Provider>
    </DrawerStateContext.Provider>
  );
};
