import { renderWithTheme as render } from '@test-utils';

import { DraggableModal } from '.';
import { Text } from '../text';

jest.mock('react-native-toast-message', () => 'Toast');

describe('DraggableModal component', () => {
  it('should render component passed to children', () => {
    render(
      <DraggableModal isOpen={true}>
        <Text>Test</Text>
      </DraggableModal>
    );
    expect(
      render(
        <DraggableModal isOpen={true}>
          <Text>Test</Text>
        </DraggableModal>
      )
    ).toBeTruthy();
  });
});
