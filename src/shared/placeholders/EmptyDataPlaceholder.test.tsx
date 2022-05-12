import { render, screen } from '@testing-library/react';
import { EmptyDataPlaceholder } from './EmptyDataPlaceholder';

describe('EmptyDataPlaceholder', () => {
  it('should render without crashing without children', async () => {
    render(<EmptyDataPlaceholder />);
    expect(await screen.findByText(/No data available/i)).toBeInTheDocument();
  });

  it('should render without crashing when passing a children', async () => {
    render(
      <EmptyDataPlaceholder>
        <span data-testid="children" />
      </EmptyDataPlaceholder>,
    );
    expect(await screen.findByTestId('children')).toBeInTheDocument();
  });
});
