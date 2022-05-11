import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Drawer, List, Toolbar, useTheme } from '@mui/material';
import * as React from 'react';
import { useMobileDetector } from 'src/shared/hooks';
import { useDrawer, useToggleDrawer } from './DrawerContext';
import { DrawerItem } from './DrawerItem';

export const AppDrawer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMobileDetector();
  const { isDrawerOpen } = useDrawer();
  const { toggleDrawer } = useToggleDrawer();

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'persistent'}
      anchor="left"
      open={isDrawerOpen}
      onClose={() => {
        toggleDrawer(false);
      }}
      sx={{
        width: theme.appDrawer.width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          background: theme.palette.background.default,
          width: theme.appDrawer.width,
          border: 0,
        },
      }}
    >
      <Toolbar />
      <List>
        <DrawerItem label="Dashboard" icon={<DashboardIcon htmlColor={theme.custom.palette.iconColor} />} link="/" />
        <DrawerItem
          label="Contacts"
          icon={<PersonOutlineIcon htmlColor={theme.custom.palette.iconColor} />}
          link="/contacts"
        />
      </List>
    </Drawer>
  );
};
