import React from 'react';

import { renderWithTheme as render } from '@test-utils';

import { List } from '.';
import { Text } from '../text';

jest.mock('react-native-toast-message', () => 'Toast');

describe('List component', () => {
  const mockData = [
    { id: '1', title: 'First Item' },
    { id: '2', title: 'Second Item' },
    { id: '3', title: 'Third Item' },
  ];

  it('should render without crashing', () => {
    const { getByTestId } = render(
      <List
        testID="list-container"
        data={mockData}
        renderItem={({ item }: any) => <Text>{item?.title}</Text>}
      />
    );

    expect(getByTestId('list-container')).toBeTruthy();
  });

  it('should render the correct number of list items', () => {
    const { getAllByTestId } = render(
      <List
        data={mockData}
        renderItem={({ item }: any) => (
          <Text testID="list-item">{item.title}</Text>
        )}
      />
    );

    const items = getAllByTestId('list-item');
    expect(items.length).toBe(mockData.length);
  });

  it('should display correct item text', () => {
    const { getByText } = render(
      <List
        data={mockData}
        renderItem={({ item }: any) => <Text>{item.title}</Text>}
      />
    );

    expect(getByText('First Item')).toBeTruthy();
    expect(getByText('Second Item')).toBeTruthy();
    expect(getByText('Third Item')).toBeTruthy();
  });

  it('should use the correct keyExtractor', () => {
    const keyExtractor = jest.fn((item) => item.id);
    render(
      <List
        data={mockData}
        renderItem={({ item }: any) => <Text>{item.title}</Text>}
        keyExtractor={keyExtractor}
      />
    );

    expect(keyExtractor).toHaveBeenCalledWith(mockData[0], 0);
    expect(keyExtractor).toHaveBeenCalledWith(mockData[1], 1);
    expect(keyExtractor).toHaveBeenCalledWith(mockData[2], 2);
  });

  it('should render empty list when no data is passed', () => {
    const { queryAllByTestId } = render(
      <List
        data={[]}
        renderItem={({ item }: any) => (
          <Text testID="list-item">{item.title}</Text>
        )}
      />
    );

    expect(queryAllByTestId('list-item').length).toBe(0);
  });
});
