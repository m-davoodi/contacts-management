import { Typography } from '@mui/material';
import * as React from 'react';

type Props = { children?: React.ReactNode };

export const EmptyRowPlaceholder: React.FC<Props> = (props) => {
  const { children } = props;
  return <Typography variant="body2">{children || '---'}</Typography>;
};
