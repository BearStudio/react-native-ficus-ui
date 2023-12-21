import React from 'react';
import { render } from '@testing-library/react-native';

import { Text } from '@/components';
import { FlashList } from './flashlist.component';
import type { FlashListProps } from './flashlist.type';
import { ThemeProvider } from '@/theme/theme.provider';

jest.mock('react-native-toast-message', () => 'Toast');

describe('FlashList component', () => {
  const TestList: React.FC<FlashListProps> = (props) => (
    <ThemeProvider>
      <FlashList {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    render(
      <TestList
        data={[{ id: 0, text: 'I love Ficus UI (forked from Magnus UI)' }]}
        renderItem={({ item }) => <Text>{item.text}</Text>}
        keyExtractor={(item) => item.id}
        estimatedItemSize={200}
      />
    );
  });
});
