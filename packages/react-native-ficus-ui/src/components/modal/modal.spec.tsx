import { Modal } from '.';
import { renderWithTheme as render } from '../../test-utils';
import { Box } from '../box';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Modal component', () => {
  it('is visible when the visible prop is true', () => {
    const { getByTestId } = render(
      <Modal testID="modal" visible={true}>
        <Box h={40} w={40} bg="green.500" />
      </Modal>
    );
    const modalComponent = getByTestId('modal');

    expect(modalComponent.props.visible).toBe(true);
  });

  it('renders children correctly', () => {
    const { getByTestId } = render(
      <Modal testID="modal" visible={true}>
        <Box testID="modal-content" h={40} w={40} bg="green.500" />
      </Modal>
    );

    const modalContent = getByTestId('modal-content');
    expect(modalContent).toBeTruthy();
  });
});
