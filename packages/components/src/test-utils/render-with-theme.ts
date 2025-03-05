import { ReactElement } from 'react';

import { render } from '@testing-library/react-native';

import { FicusProvider } from '../system';

export function renderWithTheme<
  T extends ReactElement<unknown, React.JSXElementConstructor<any> | string>,
>(component: T) {
  return render(component, {
    wrapper: FicusProvider,
  });
}
