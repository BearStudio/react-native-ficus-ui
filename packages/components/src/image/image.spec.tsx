import { renderWithTheme as render } from '@test-utils';

import { Image } from '.';

jest.mock('react-native-toast-message', () => 'Toast');

describe('ImageComponent', () => {
  it('renders correctly with given source and alt text', () => {
    const testSource = { uri: 'https://example.com/test-image.jpg' };
    const testAlt = 'Test Image';

    const { getByLabelText } = render(
      <Image testID="image-component" source={testSource} alt={testAlt} />
    );

    const image = getByLabelText(testAlt);
    expect(image).toBeTruthy();
  });

  it('applies the correct image source', () => {
    const testSource = { uri: 'https://example.com/test-image.jpg' };

    const { getByTestId } = render(
      <Image testID="image-component" source={testSource} alt="Sample Image" />
    );

    const image = getByTestId('image-component');
    expect(image.props.source).toEqual(testSource);
  });
});
