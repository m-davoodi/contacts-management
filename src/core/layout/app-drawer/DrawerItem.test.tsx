import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { DrawerProvider } from './DrawerContext';
import { DrawerItem } from './DrawerItem';

describe('use boolean state', () => {
  it('renders the DrawerItem label correctly', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <DrawerItem label="Dashboard" link="/" />
      </Router>,
      { wrapper: DrawerProvider },
    );
    expect(screen.getByRole('button')).toHaveTextContent('Dashboard');
  });

  it('renders the DrawerItem selected when the path matched', () => {
    const history = createMemoryHistory();
    history.push('/dashboard');
    render(
      <Router location={history.location} navigator={history}>
        <DrawerItem label="Dashboard" link="/dashboard" />
      </Router>,
      { wrapper: DrawerProvider },
    );
    expect(screen.getByRole('button')).toHaveClass('Mui-selected');
  });

  it('renders the DrawerItem not selected when the path does not match', () => {
    const history = createMemoryHistory();
    history.push('/some/other/path');
    render(
      <Router location={history.location} navigator={history}>
        <DrawerItem label="Dashboard" link="/dashboard" />
      </Router>,
      { wrapper: DrawerProvider },
    );
    expect(screen.getByRole('button')).not.toHaveClass('Mui-selected');
  });
});
