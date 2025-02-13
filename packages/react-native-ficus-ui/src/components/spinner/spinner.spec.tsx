import React from 'react';
import { render } from '@testing-library/react-native';

import { Spinner } from './spinner.component';
import type { SpinnerProps } from './spinner.type';
import { ThemeProvider } from '../../theme/theme.provider';

jest.mock('react-native-toast-message', () => 'Toast');

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
