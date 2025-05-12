import React from 'react';

import { renderWithTheme as render } from '@test-utils';

import { Select } from '.';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Select component', () => {
  it('should render component passed to children', () => {
    render(
      <Select
        onValueChange={(value) => console.log(value)}
        items={[
          { label: 'Football', value: 'football' },
          { label: 'Baseball', value: 'baseball' },
          { label: 'Hockey', value: 'hockey' },
        ]}
      />
    );
  });
});
