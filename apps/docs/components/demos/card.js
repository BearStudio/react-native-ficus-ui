import { FicusProvider } from 'react-native-ficus-ui';

import { ItemCard } from '@components/demos/responsive';

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
      <ItemCard content={item} />
    </FicusProvider>
  );
};
