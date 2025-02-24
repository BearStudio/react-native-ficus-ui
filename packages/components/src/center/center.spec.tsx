import React from 'react';

import { ThemeProvider } from '@ficus-ui/theme';
import { render } from '@testing-library/react-native';

import { Center, CenterProps } from '.';
import { Box } from '../box';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Center component', () => {
  it('should render child components correctly', () => {
    const { getByTestId } = render(
      <Center>
        <Box h={40} w={40} mr="sm" bg="green.500" testID="box-green" />
        <Box h={40} w={40} mr="sm" bg="teal.500" testID="box-teal" />
      </Center>
    );

    expect(getByTestId('box-green')).toBeTruthy();
    expect(getByTestId('box-teal')).toBeTruthy();
  });
});
