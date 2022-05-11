import { MemoryRouterProps } from 'react-router';
import { MemoryRouter } from 'react-router-dom';

export const routerDecorator =
  (routerProps: MemoryRouterProps = {}) =>
  (story: any) =>
    <MemoryRouter {...routerProps}>{story()}</MemoryRouter>;
