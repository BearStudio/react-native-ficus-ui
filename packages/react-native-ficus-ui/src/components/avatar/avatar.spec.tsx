import React from 'react';
import { render } from '@testing-library/react-native';

import { Avatar } from './avatar.component';
import type { AvatarProps } from './avatar.type';
import { ThemeProvider } from '../../theme/theme.provider';

jest.mock('react-native-toast-message', () => 'Toast');

describe('Avatar component', () => {
  const TestAvatar: React.FC<AvatarProps> = (props) => (
    <ThemeProvider>
      <Avatar {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    render(
      <TestAvatar
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
    );
  });
});
