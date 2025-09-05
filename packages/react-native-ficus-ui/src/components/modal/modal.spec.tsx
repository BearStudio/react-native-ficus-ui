import { Modal } from '.';
import { renderWithTheme as render } from '../../test-utils';
import { Box } from '../box';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Modal component', () => {
  it('is opened when the isOpen prop is true', () => {
    const { getByTestId } = render(
      <Modal testID="modal" isOpen={true}>
        <Box h={40} w={40} bg="green.500" />
      </Modal>
    );
    const modalComponent = getByTestId('modal');

    expect(modalComponent.props.isOpen).toBe(true);
  });

  it('renders children correctly', () => {
    const { getByTestId } = render(
      <Modal testID="modal" isOpen={true}>
        <Box testID="modal-content" h={40} w={40} bg="green.500" />
      </Modal>
    );

    const modalContent = getByTestId('modal-content');
    expect(modalContent).toBeTruthy();
  });
});
