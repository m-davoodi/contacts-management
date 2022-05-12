import { Box, BoxProps, Typography } from '@mui/material';
import * as React from 'react';

type Props = { children?: React.ReactNode } & BoxProps;

export const EmptyDataPlaceholder: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={3} {...rest}>
      <Typography>{children || 'No data available'}</Typography>
    </Box>
  );
};
