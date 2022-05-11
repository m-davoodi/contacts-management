import * as React from 'react';

import { ErrorContext } from './ErrorContext';

interface Props {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): { error: Error } {
    return { error };
  }

  private retry = () => {
    this.setState({ error: null });
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error(error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.error) {
      return (
        <ErrorContext.Provider
          value={{
            error: this.state.error,
            reset: this.retry,
          }}
        >
          {this.props.fallback}
        </ErrorContext.Provider>
      );
    }

    return this.props.children;
  }
}
