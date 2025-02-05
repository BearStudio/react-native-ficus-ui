import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { Badge } from './badge.component';
import type { BadgeProps } from './badge.type';
import { ThemeProvider } from '../../theme/theme.provider';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Badge component', () => {
  const TestBadge: React.FC<BadgeProps> = (props) => (
    <ThemeProvider>
      <Badge {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    render(<TestBadge>I love Ficus UI (forked from Magnus UI)</TestBadge>);

    expect(
      screen.getByText('I love Ficus UI (forked from Magnus UI)')
    ).toBeTruthy();
  });
});
