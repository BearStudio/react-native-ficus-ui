

import { Radio } from '.';
import { renderWithTheme as render } from '../../test-utils';

describe('Radio Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Radio testID="radio" />);
    expect(getByTestId('radio')).toBeTruthy();
  });
});
