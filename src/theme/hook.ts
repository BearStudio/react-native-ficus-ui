import { useContext } from 'react';

import { ThemeContext } from './context';

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('useTheme must be used within ficus ThemeProvider');
  }

  return themeContext;
};
