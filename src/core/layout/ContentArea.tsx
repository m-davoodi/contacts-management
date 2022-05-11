import { Box, Container, styled } from '@mui/material';
import { shouldForwardProp } from '@mui/system';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'src/shared/error-boundary';
import { useMobileDetector } from 'src/shared/hooks';
import { useDrawer } from './app-drawer';

export const ContentArea: React.FC = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
        useErrorBoundary: true,
        refetchOnWindowFocus: false,
      },
    },
  });
  const isMobile = useMobileDetector();
  const { isDrawerOpen } = useDrawer();

  return (
    <ErrorBoundary
      fallback={
        <div>
          Oops!
          <br />
          Something went wrong! :(
        </div>
      }
    >
      <Container maxWidth={false}>
        <Box mt={8}>
          <ContentWrapper isDrawerOpen={isDrawerOpen} isMobile={isMobile}>
            <React.Suspense fallback={<div>Loading...</div>}>
              <QueryClientProvider client={queryClient}>
                <Outlet />
              </QueryClientProvider>
            </React.Suspense>
          </ContentWrapper>
        </Box>
      </Container>
    </ErrorBoundary>
  );
};

const ContentWrapper = styled('div', {
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== 'isMobile' && prop !== 'isDrawerOpen',
})<{ isMobile: boolean; isDrawerOpen: boolean }>(({ theme, isDrawerOpen, isMobile }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(isDrawerOpen && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `calc(${theme.appDrawer.width}px - ${theme.spacing(3)})`,
  }),
  ...((isMobile || !isDrawerOpen) && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));
