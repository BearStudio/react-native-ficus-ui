import { renderWithTheme as render } from '@test-utils';
import { screen } from '@testing-library/react-native';

import { SafeAreaBox } from '.';
import { Text } from '../text';

jest.mock('react-native-toast-message', () => 'Toast');

describe('SafeAreaBox component', () => {
  it('should render component passed to children', () => {
    render(
      <SafeAreaBox>
        <Text>I love Ficus UI (forked from Magnus UI)</Text>
      </SafeAreaBox>
    );

    expect(
      screen.getByText('I love Ficus UI (forked from Magnus UI)')
    ).toBeTruthy();
  });
});
