import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { Text } from '../text/text.component';
import { Image } from './image.component';
import type { ImageProps } from './image.type';
import { ThemeProvider } from '../../theme/theme.provider';

describe('Image component', () => {
  const TestImage: React.FC<ImageProps> = (props) => (
    <ThemeProvider>
      <Image {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    render(<TestImage />);
  });
});
