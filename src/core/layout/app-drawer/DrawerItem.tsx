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
        borderRadius: theme.spacing(0, 3, 3, 0),
        '&.Mui-selected': {
          backgroundColor: `${theme.palette.secondary.light} !important`,
        },
      }}
    >
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText primary={label} />
    </ListItemButton>
  );
};
