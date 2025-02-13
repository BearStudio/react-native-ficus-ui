import React from 'react';
import { render } from '@testing-library/react-native';

import { Text } from '../text/text.component';
import { List } from './list.component';
import type { ListProps } from './list.type';
import { ThemeProvider } from '../../theme/theme.provider';

jest.mock('react-native-toast-message', () => 'Toast');

describe('List component', () => {
  const TestList: React.FC<ListProps> = (props) => (
    <ThemeProvider>
      <List {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    render(
      <TestList
        data={[{ id: 0, text: 'I love Ficus UI (forked from Magnus UI)' }]}
        renderItem={({ item }) => <Text>{item.text}</Text>}
        keyExtractor={(item) => item.id}
      />
    );
  });
});
