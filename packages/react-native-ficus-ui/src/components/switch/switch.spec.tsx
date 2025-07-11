

import { Switch } from '.';
import { renderWithTheme as render } from '../../test-utils';

describe('Switch Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Switch testID="switch" />);
    expect(getByTestId('switch')).toBeTruthy();
  });
});
