import { ReactElement } from 'react';

import { ThemeProvider } from '@ficus-ui/theme';
import { render } from '@testing-library/react-native';

export function renderWithTheme<
  T extends ReactElement<unknown, React.JSXElementConstructor<any> | string>,
>(component: T) {
  return render(component, {
    wrapper: ThemeProvider,
  });
}
