import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';

import { Text } from '../text/text.component';
import { Checkbox } from './checkbox.component';
import { CheckboxGroup } from './group.component';
import { Box } from '../box/box.component';
import { defaultTheme } from '../../theme/theme.default';

describe('Checkbox component', () => {
  it('should render component without error', () => {
    const checkboxId = 'checkboxId';

    render(
      <Checkbox
        testID={checkboxId}
        value={1}
        prefix={<Text flex={1}>Option 1</Text>}
      />
    );

    expect(screen.getByTestId(checkboxId)).toBeDefined();
    expect(screen.getByText('Option 1')).toBeTruthy();
  });

  it('should option press trigger onChecked function', () => {
    const checkboxId = 'checkboxId';
    const textId = 'textId';
    const onCheckedMock = jest.fn();
    render(
      <Checkbox
        testID={checkboxId}
        onChecked={onCheckedMock}
        value={1}
        prefix={
          <Text testID={textId} flex={1}>
            Option 1
          </Text>
        }
      />
    );

    const text = screen.getByTestId(textId);

    expect(onCheckedMock).toHaveBeenCalledTimes(0);
    fireEvent.press(text);
    expect(onCheckedMock).toHaveBeenCalledTimes(1);
  });

  it('should group component render with children without errors ', () => {
    const checkboxGroupId = 'checkboxGroupId';
    render(
      <CheckboxGroup testID={checkboxGroupId} colorScheme="green">
        <Checkbox value={1}>Option 1</Checkbox>
        <Checkbox value={2}>Option 2</Checkbox>
      </CheckboxGroup>
    );

    const group = screen.getByTestId(checkboxGroupId);
    const option1 = screen.getByText('Option 1');
    const option2 = screen.getByText('Option 2');

    expect(group).toBeDefined();
    expect(option1).toBeVisible();
    expect(option2).toBeVisible();
  });

  it('should checkbox state affect rendering', () => {
    render(
      <CheckboxGroup flexDirection="row">
        {['Option 1', 'Option 2'].map((item) => (
          <Checkbox value={item}>
            {({ isChecked }) => (
              <Box
                bg={isChecked ? 'blue.600' : 'blue.100'}
                px="xl"
                py="md"
                mr="md"
                borderRadius="full"
              >
                <Text color={isChecked ? 'white' : 'red.800'}>{item}</Text>
              </Box>
            )}
          </Checkbox>
        ))}
      </CheckboxGroup>
    );

    const option1 = screen.getByText('Option 1');
    const option2 = screen.getByText('Option 2');

    const red800 = defaultTheme.colors?.red[800];
    const white = defaultTheme.colors?.white as string;

    expect(option1).toBeVisible();
    expect(option2).toBeVisible();

    expect(option1).toHaveStyle({
      color: red800,
    });

    fireEvent.press(option2);

    expect(option2).toHaveStyle({
      color: white,
    });
  });
});
