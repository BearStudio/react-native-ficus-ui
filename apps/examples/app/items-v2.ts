import { ComponentType } from 'react';
import BoxComponent from './components-v2/Box';
import BadgeComponent from './components-v2/Badge';
import StackComponent from '@/app/components-v2/Stack';

type ExampleComponentType = {
  onScreenName: string;
  navigationPath: string;
  component: ComponentType;
};

export const components: ExampleComponentType[] = [
  { navigationPath: 'Box', onScreenName: 'Box', component: BoxComponent },
  { navigationPath: 'Badge', onScreenName: 'Badge', component: BadgeComponent },
  { navigationPath: 'Stack', onScreenName: 'Stack', component: StackComponent },
];
