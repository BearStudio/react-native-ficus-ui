import { ComponentType } from 'react';
import BoxComponent from './components-v2/Box';
import CenterComponent from '@/app/components-v2/Center';

type ExampleComponentType = {
  onScreenName: string;
  navigationPath: string;
  component: ComponentType;
};

export const components: ExampleComponentType[] = [

  { navigationPath: 'Box', onScreenName: 'Box', component: BoxComponent },
  { navigationPath: 'Center', onScreenName: 'Center', component: CenterComponent },

];
