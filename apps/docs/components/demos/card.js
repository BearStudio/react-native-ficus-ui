import { FicusProvider, useColorMode } from 'react-native-ficus-ui';

import { ItemCard } from '@components/demos/responsive';
import { useTheme } from 'nextra-theme-docs';
import { useEffect } from 'react';

const ThemeProvider = ({ children }) => {
  const { theme: nextraTheme } = useTheme();
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode(nextraTheme);
  }, [nextraTheme]);

  return children;
}

export const Card = () => {
  const item = {
    id: 1,
    image: 'https://bit.ly/4dR2Hgy',
    location: 'Cape Town',
    name: 'Modern, Chic Penthouse with Pool and Golf park',
    price: '200$',
    scoring: 4.91,
    evaluations: 290,
  };

  return (
    <FicusProvider>
      <ThemeProvider>
        <ItemCard content={item} />
      </ThemeProvider>
    </FicusProvider>
  );
};
