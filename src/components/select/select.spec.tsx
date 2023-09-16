import { cleanup, fireEvent, render, screen } from '@testing-library/react-native';
import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../button/button.component';
import { Select } from './select.component';
import { SelectRef } from './select.type';

afterEach(cleanup);

describe('Test react-select component', () => {
  const mockedOptions = [
    { label: 'Mocked option 1', value: 'mocked-option-1' },
    { label: 'Mocked option 2', value: 'mocked-option-2' },
    { label: 'Mocked option 3', value: 'mocked-option-3' },
  ];

  it('Should render when button is clicked without errors', async () => {
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
    const button = screen.queryByTestId(buttonId);

    expect(select).toBeDefined();
    expect(select.props).toHaveProperty('visible');
    expect(select.props.visible).toBeFalsy();

    fireEvent.press(button);

    expect(select.props.visible).toBeTruthy();
  });

  it('closes the Select modal when an option is selected', async () => {
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
          title={'Select an option'}
          ref={selectRef}
          data={mockedOptions}
          value={mockedOptions.at(0)}
          renderItem={(item, index) => (
            <Text>s</Text>
          )}
        />
      </View>
    );

    const select = screen.queryByTestId(selectId);
    const button = screen.queryByTestId(buttonId);

    expect(select).toBeDefined();
    expect(select.props).toHaveProperty('visible');
    expect(select.props.visible).toBeFalsy();

    fireEvent.press(button);

    expect(select.props.visible).toBeTruthy();
  });
});
