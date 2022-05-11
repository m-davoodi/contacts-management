import * as React from 'react';

interface ErrorContextType {
  reset: () => void;
  error: Error | null;
}
export const ErrorContext = React.createContext<ErrorContextType>({
  error: null,
  reset: () => {
    return void 0;
  },
});

export const useErrorContext = (): ErrorContextType => React.useContext(ErrorContext);
