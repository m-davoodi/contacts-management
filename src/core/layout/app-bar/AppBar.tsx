import {
  Brightness4Outlined as ToggleDarkModeIcon,
  Brightness5Outlined as ToggleLightModeIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { AppBar as MuiAppBar, Box, IconButton, styled, Toolbar, useScrollTrigger, useTheme } from '@mui/material';
import * as React from 'react';
import logo from 'src/assets/logo.png';
import { useTogglePaletteMode } from 'src/core/theme';
import { useToggleDrawer } from '../app-drawer';

export const AppBar: React.FC = () => {
  const theme = useTheme();
  const { togglePaletteMode } = useTogglePaletteMode();
  const { toggleDrawer } = useToggleDrawer();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <Box flexGrow={1}>
      <MuiAppBar
        elevation={trigger ? 4 : 0}
        sx={{
          ...(trigger
            ? {
                borderBottomStyle: 'solid',
                borderBottomWidth: '1px',
                borderBottomColor: theme.palette.divider,
              }
            : {}),
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            sx={{
              [theme.breakpoints.up('md')]: {
                marginRight: theme.spacing(1),
              },
            }}
            aria-label="open drawer"
            onClick={() => {
              toggleDrawer();
            }}
          >
            <MenuIcon htmlColor={theme.custom.palette.iconColor} />
          </IconButton>
          <Logo src={logo} alt="logo" />
          <Box flexGrow={1} />
          <div>
            <IconButton
              aria-label="toggle dark theme"
              aria-controls="primary-search-account-menu"
              onClick={() => {
                togglePaletteMode();
              }}
            >
              {theme.palette.mode === 'dark' ? (
                <ToggleLightModeIcon htmlColor={theme.custom.palette.iconColor} />
              ) : (
                <ToggleDarkModeIcon htmlColor={theme.custom.palette.iconColor} />
              )}
            </IconButton>
          </div>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

const Logo = styled('img')(({ theme }) => ({
  height: theme.spacing(3),
  padding: theme.spacing(0, 1, 0, 0),
}));
