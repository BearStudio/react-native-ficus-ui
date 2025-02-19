/* eslint-disable jest/no-disabled-tests */
import * as React from 'react';

import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react-native';
import { Text, View } from 'react-native';

import { Button } from '../button/button.component';
import { Select } from './select.component';
import { Option } from './select.option.component';
import { SelectRef } from './select.type';

afterEach(cleanup);

describe('Select component', () => {
  const mockedOptions = [
    { label: 'Mocked option 1', value: 'mocked-option-1' },
    { label: 'Mocked option 2', value: 'mocked-option-2' },
    { label: 'Mocked option 3', value: 'mocked-option-3' },
  ];

  it.skip('should render when button is clicked without errors', async () => {
    const selectRef = React.createRef<SelectRef>();

    const selectId = 'select-id';
    const buttonId = 'button-id';

    render(
      <View>
        <Button testID={buttonId} onPress={() => selectRef.current?.open()}>
          Select button
        </Button>

        <Select
          testID={selectId}
          ref={selectRef}
          data={mockedOptions}
          value={mockedOptions.at(0)}
          renderItem={() => <></>}
        />
      </View>
    );

    const select = screen.queryByTestId(selectId);
    const button = screen.getByTestId(buttonId);

    expect(select).not.toBeNull();
    expect(select?.props).toHaveProperty('visible');
    expect(select?.props.visible).toBeFalsy();

    fireEvent.press(button);

    expect(select?.props.visible).toBeTruthy();
  });

  it('should handle single selection', async () => {
    const selectRef = React.createRef<SelectRef>();
    const selectFn = jest.fn();

    const buttonId = 'button-id';

    render(
      <View>
        <Button testID={buttonId} onPress={() => selectRef.current?.open()}>
          Select button
        </Button>

        <Select
          onSelect={selectFn}
          title={'Select an option'}
          ref={selectRef}
          data={mockedOptions}
          value={mockedOptions[0]}
          renderItem={(item) => (
            <Option value={item} py="md" px="xl">
              <Text>{item.label}</Text>
            </Option>
          )}
        />
      </View>
    );

    const button = screen.getByTestId(buttonId);

    fireEvent.press(button);
    const option = screen.getByText('Mocked option 2');
    fireEvent.press(option);
    expect(selectFn).toHaveBeenLastCalledWith(mockedOptions[1]);
  });

  it('should handle single selection with submit prop', async () => {
    const selectRef = React.createRef<SelectRef>();
    const selectFn = jest.fn();

    const buttonId = 'button-id';

    render(
      <View>
        <Button testID={buttonId} onPress={() => selectRef.current?.open()}>
          Select button
        </Button>

        <Select
          submit
          onSelect={selectFn}
          ref={selectRef}
          value={1}
          title="This is your title"
          mt="md"
          pb="2xl"
          message="This is the long message used to set some context"
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={(item) => (
            <Option value={item} py="md" px="xl">
              <Text>{item}</Text>
            </Option>
          )}
        />
      </View>
    );

    const button = screen.getByTestId(buttonId);

    fireEvent.press(button);
    const option = screen.getByText('2');
    const submit = screen.getByText('Submit');

    fireEvent.press(option);
    expect(selectFn).not.toHaveBeenCalled();
    fireEvent.press(submit);
    expect(selectFn).toHaveBeenCalledWith(2);
  });

  it('should handle multiple selection', async () => {
    const selectRef = React.createRef<SelectRef>();
    const selectFn = jest.fn();
    const buttonId = 'button-id';

    render(
      <View>
        <Button testID={buttonId} onPress={() => selectRef.current?.open()}>
          Select button
        </Button>

        <Select
          isMultiple
          onSelect={selectFn}
          ref={selectRef}
          value={[]}
          title="This is your title"
          mt="md"
          pb="2xl"
          message="This is the long message used to set some context"
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={(item) => (
            <Option value={item} py="md" px="xl">
              <Text>{item}</Text>
            </Option>
          )}
        />
      </View>
    );

    const button = screen.getByTestId(buttonId);

    fireEvent.press(button);
    const option1 = screen.getByText('1');
    const option3 = screen.getByText('3');

    const submit = screen.getByText('Submit');
    fireEvent.press(option1);
    fireEvent.press(option3);
    fireEvent.press(submit);
    expect(selectFn).toHaveBeenLastCalledWith([1, 3]);
  });
});
