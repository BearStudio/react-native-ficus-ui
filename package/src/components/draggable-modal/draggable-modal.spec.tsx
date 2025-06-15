import { DraggableModal } from '.';
import { renderWithTheme as render } from '../../test-utils';
import { Text } from '../text';

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
