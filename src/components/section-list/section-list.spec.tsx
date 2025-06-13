import React from 'react';

import { SectionList } from '.';
import { renderWithTheme as render } from '../../test-utils';
import { Box } from '../box';
import { Text } from '../text';

const MySectionList = ({ sections }: any) => {
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item: any, index: any) => (item.title + index).toString()}
      renderItem={({ item }: any) => (
        <Box p="sm">
          <Text>{item.title}</Text> {/* Access item.title here */}
        </Box>
      )}
      renderSectionHeader={({ section: { title } }: any) => (
        <Box bg="gray.300" p="sm">
          <Text>{title}</Text>
        </Box>
      )}
    />
  );
};

describe('MySectionList component', () => {
  const sections = [
    {
      title: 'Section 1',
      data: [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
      ],
    },
    {
      title: 'Section 2',
      data: [
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 4' },
      ],
    },
  ];

  it('renders section headers and items correctly', () => {
    const { getByText } = render(<MySectionList sections={sections} />);

    // Check if section headers are rendered
    expect(getByText('Section 1')).toBeTruthy();
    expect(getByText('Section 2')).toBeTruthy();

    // Check if items are rendered
    expect(getByText('Item 1')).toBeTruthy();
    expect(getByText('Item 2')).toBeTruthy();
    expect(getByText('Item 3')).toBeTruthy();
    expect(getByText('Item 4')).toBeTruthy();
  });
});
