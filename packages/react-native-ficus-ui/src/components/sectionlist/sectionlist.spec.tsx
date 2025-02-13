import React from 'react';

import { render, screen } from '@testing-library/react-native';

import { ThemeProvider } from '../../theme/theme.provider';
import { Box } from '../box/box.component';
import { Text } from '../text/text.component';
import { SectionList } from './sectionlist.component';
import type { SectionListProps } from './sectionlist.type';

jest.mock('react-native-toast-message', () => 'Toast');

describe('SectionList component', () => {
  const TestSectionList: React.FC<SectionListProps> = (props) => (
    <ThemeProvider>
      <SectionList {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    render(
      <TestSectionList
        sections={[
          { title: 'Test', data: ['I love Ficus UI (forked from Magnus UI)'] },
        ]}
        renderItem={({ item }) => (
          <Box>
            <Text>{item}</Text>
          </Box>
        )}
        renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
        keyExtractor={(item) => item}
      />
    );

    expect(
      screen.getByText('I love Ficus UI (forked from Magnus UI)')
    ).toBeTruthy();
  });
});
