import { ComponentType } from 'react';
import BoxComponent from './components-v2/Box';
import TextComponent from '@/app/components-v2/Text';
import SafeAreaBoxComponent from '@/app/components-v2/SafeAreaBox';
import ScrollBoxComponent from '@/app/components-v2/ScrollBox';
import BadgeComponent from './components-v2/Badge';

type ExampleComponentType = {
  onScreenName: string;
  navigationPath: string;
  component: ComponentType;
};

export const components: ExampleComponentType[] = [
  { navigationPath: 'Box', onScreenName: 'Box', component: BoxComponent },
  { navigationPath: 'Text', onScreenName: 'Text', component: TextComponent },
  { navigationPath: 'SafeAreaBox', onScreenName: 'SafeAreaBox', component: SafeAreaBoxComponent },
  { navigationPath: 'ScrollBox', onScreenName: 'ScrollBox', component: ScrollBoxComponent },
  { navigationPath: 'Badge', onScreenName: 'Badge', component: BadgeComponent },
];
