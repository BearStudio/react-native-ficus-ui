import { ComponentType } from 'react';
import BoxComponent from './components-v2/Box';
import BadgeComponent from './components-v2/Badge';
import FlexComponent from '@/app/components-v2/Flex';

type ExampleComponentType = {
  onScreenName: string;
  navigationPath: string;
  component: ComponentType;
};

export const components: ExampleComponentType[] = [
  { navigationPath: 'Box', onScreenName: 'Box', component: BoxComponent },
  { navigationPath: 'Badge', onScreenName: 'Badge', component: BadgeComponent },
  { navigationPath: 'Flex', onScreenName: 'Flex', component: FlexComponent },
];
