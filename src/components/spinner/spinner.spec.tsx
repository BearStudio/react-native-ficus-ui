import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { Text } from '../text/text.component';
import { Spinner } from './spinner.component';
import type { SpinnerProps } from './spinner.type';
import { ThemeProvider } from '../../theme/theme.provider';

describe('Spinner component', () => {
  const TestSpinner: React.FC<SpinnerProps> = (props) => (
    <ThemeProvider>
      <Spinner {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    render(<TestSpinner size="lg" />);
  });
});
