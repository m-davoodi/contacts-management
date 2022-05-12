import { CircularProgress, styled, useTheme } from '@mui/material';
import * as React from 'react';

interface Props {
  fullHeight?: boolean;
}

export const LoadingOverlay: React.FC<Props> = (props) => {
  const { fullHeight } = props;
  const { palette } = useTheme();

  return (
    <Wrapper fullHeight={fullHeight}>
      <CircularProgress sx={{ color: palette.mode === 'dark' ? palette.text.primary : palette.primary.main }} />
    </Wrapper>
  );
};

const Wrapper = styled('div', { shouldForwardProp: (prop) => prop !== 'fullHeight' })<Props>(({ fullHeight }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: fullHeight ? '100vh' : '100%',
}));
