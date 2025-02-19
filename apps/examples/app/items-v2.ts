import { ComponentType } from 'react';
import BoxComponent from './components-v2/Box';

type ExampleComponentType = {
  onScreenName: string;
  navigationPath: string;
  component: ComponentType;
};

export const components: ExampleComponentType[] = [

  { navigationPath: 'Box', onScreenName: 'Box', component: BoxComponent },

];
