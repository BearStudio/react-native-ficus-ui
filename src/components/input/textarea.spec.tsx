

import { Textarea } from '.';
import { renderWithTheme as render } from '../../test-utils';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Textarea component', () => {
  it('should render component passed to children', () => {
    render(<Textarea placeholder="Username" />);
  });
});
