import React from 'react';

import { FlashList } from '.';
import { renderWithTheme as render } from '../../test-utils';
import { Text } from '../text';

jest.mock('react-native-toast-message', () => 'Toast');

describe('FlashList component', () => {
  it('should render component passed to children', () => {
    render(
      <FlashList
        data={[{ id: 0, text: 'I love Ficus UI (forked from Magnus UI)' }]}
        renderItem={({ item }: any) => <Text>{item.text}</Text>}
        keyExtractor={(item: any) => item.id}
        estimatedItemSize={200}
      />
    );
  });
});
