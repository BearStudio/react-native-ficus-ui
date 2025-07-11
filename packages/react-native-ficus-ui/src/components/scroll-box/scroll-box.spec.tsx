import { screen } from '@testing-library/react-native';

import { ScrollBox } from '.';
import { renderWithTheme as render } from '../../test-utils';
import { Text } from '../text';

jest.mock('react-native-toast-message', () => 'Toast');

describe('ScrollBox component', () => {
  it('should render component passed to children', () => {
    render(
      <ScrollBox>
        <Text>I love Ficus UI (forked from Magnus UI)</Text>
      </ScrollBox>
    );

    expect(
      screen.getByText('I love Ficus UI (forked from Magnus UI)')
    ).toBeTruthy();
  });
});
