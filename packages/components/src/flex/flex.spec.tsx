import React from 'react';

import { ThemeProvider } from '@ficus-ui/theme';
import { render } from '@testing-library/react-native';

import { Flex, FlexProps } from '.';
import { Box } from '../box';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Flex component', () => {
  const TestFlex: React.FC<FlexProps> = (props) => (
    <ThemeProvider>
      <Flex {...props} />
    </ThemeProvider>
  );

  it('applies the row direction', () => {
    const { getByTestId } = render(
      <TestFlex testID="flex-container" flexDirection="row">
        <Box h={40} w={40} mr="sm" bg="green.500" />
        <Box h={40} w={40} mr="sm" bg="teal.500" />
      </TestFlex>
    );
    const flexComponent = getByTestId('flex-container');

    expect(flexComponent.props.style?.flexDirection).toBe('row');
  });

  it('applies the column direction', () => {
    const { getByTestId } = render(
      <TestFlex testID="flex-container" flexDirection="column">
        <Box h={40} w={40} mr="sm" bg="green.500" />
        <Box h={40} w={40} mr="sm" bg="teal.500" />
      </TestFlex>
    );
    const flexComponent = getByTestId('flex-container');

    expect(flexComponent.props.style?.flexDirection).toBe('column');
  });
});
