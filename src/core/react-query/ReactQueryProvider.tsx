import * as React from 'react';
import { QueryClient, QueryClientProvider, QueryFunction } from 'react-query';
import { client } from 'src/shared/utils';

const defaultQueryFn: QueryFunction = async (context) => {
  const {
    queryKey: [path, params],
  } = context;
  if (typeof path !== 'string' || params === null || (params !== undefined && typeof params !== 'object')) {
    throw new Error('default query function called by unsupported params');
  }
  return client(path, { params });
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      queryFn: defaultQueryFn,
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
    },
  },
});

type Props = {
  children: React.ReactNode;
};

export const ReactQueryProvider: React.FC<Props> = (props) => {
  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
};
