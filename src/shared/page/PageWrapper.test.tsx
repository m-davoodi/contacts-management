import { render } from '@testing-library/react';
import { PageWrapper } from './PageWrapper';

describe('PageWrapper', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <PageWrapper>
        <span>test</span>
      </PageWrapper>,
    );
    expect(container).toContainHTML('<span>test</span>');
  });
});
