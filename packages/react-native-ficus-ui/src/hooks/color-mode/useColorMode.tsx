import { useContext } from 'react';

import { ThemeContext } from '../../theme/context';

export const useColorMode = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('useColorMode must be used within ficus ThemeProvider');
  }

  const toggleColorMode = () => {
    if (themeContext.colorMode === 'light') {
      themeContext.setColorMode('dark');
    } else {
      themeContext.setColorMode('light');
    }
  };

  return {
    colorMode: themeContext.colorMode,
    setColorMode: themeContext.setColorMode,
    toggleColorMode,
  };
};
