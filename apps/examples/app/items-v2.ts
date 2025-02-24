import { ComponentType } from 'react';
import BoxComponent from './components-v2/Box';
import StackComponent from '@/app/components-v2/Stack';
import CenterComponent from '@/app/components-v2/Center';
import BadgeComponent from './components-v2/Badge';

type ExampleComponentType = {
  onScreenName: string;
  navigationPath: string;
  component: ComponentType;
};

export const components: ExampleComponentType[] = [
  { navigationPath: 'Box', onScreenName: 'Box', component: BoxComponent },
  { navigationPath: 'Stack', onScreenName: 'Stack', component: StackComponent },
  { navigationPath: 'Center', onScreenName: 'Center', component: CenterComponent },
  { navigationPath: 'Badge', onScreenName: 'Badge', component: BadgeComponent },
];
