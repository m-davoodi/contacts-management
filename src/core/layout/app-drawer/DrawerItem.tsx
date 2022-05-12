import { ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import * as React from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { useMobileDetector } from 'src/shared/hooks';
import { useToggleDrawer } from './DrawerContext';

export interface DrawerItemProps {
  label: string;
  link: string;
  icon?: React.ReactNode;
}

export const DrawerItem: React.FC<DrawerItemProps> = (props) => {
  const { label, link, icon } = props;
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMobileDetector();
  const { toggleDrawer } = useToggleDrawer();
  const selected = !!useMatch({ path: link, end: true });

  const handleClick = () => {
    if (isMobile) {
      toggleDrawer(false);
    }
    navigate(link);
  };

  return (
    <ListItemButton
      selected={selected}
      onClick={handleClick}
      sx={{
        '&.Mui-selected': {
          backgroundColor: `${theme.palette.primary.light} !important`,
        },
      }}
    >
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText primary={label} />
    </ListItemButton>
  );
};
