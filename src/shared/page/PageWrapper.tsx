import { styled } from '@mui/material';
import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

export const PageWrapper: React.FC<Props> = (props) => {
  const { children } = props;

  return <Section>{children}</Section>;
};

const Section = styled('section')(({ theme }) => ({
  padding: theme.spacing(2),
  position: 'relative',
  height: '100vh',
}));
