import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { Text } from '../text/text.component';
import { Box } from '../box/box.component';
import { List } from './list.component'; 
import type { ListProps } from './list.type';
import { ThemeProvider } from '../../theme/theme.provider';

describe('List component', () => {
  const TestList: React.FC<ListProps> = (props) => (
    <ThemeProvider>
      <List {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    render(
      <TestList
        data={[{id: 0, text: 'I love Ficus UI (forked from Magnus UI)'}]}
        renderItem={({item}) => (
          <Box>
            <Text>{item.text}</Text>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
    );

    expect(
      screen.getByText('I love Ficus UI (forked from Magnus UI)')
    ).toBeTruthy();
  });
});
