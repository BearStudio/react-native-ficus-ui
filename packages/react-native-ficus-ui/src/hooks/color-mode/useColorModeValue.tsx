import { useContext } from 'react';

import { ThemeContext } from '../../theme/context';

export const useColorModeValue = (
  lightValue: string | any,
  darkValue: string | any
) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error(
      'useColorModeValue must be used within ficus ThemeProvider'
    );
  }

  if (themeContext.colorMode === 'dark') {
    return darkValue;
  }

  return lightValue;
};
