import { ComponentType } from 'react';
import BoxComponent from './components-v2/Box';
import BadgeComponent from './components-v2/Badge';

type ExampleComponentType = {
  onScreenName: string;
  navigationPath: string;
  component: ComponentType;
};

export const components: ExampleComponentType[] = [
  { navigationPath: 'Box', onScreenName: 'Box', component: BoxComponent },
  { navigationPath: 'Badge', onScreenName: 'Badge', component: BadgeComponent },
];
