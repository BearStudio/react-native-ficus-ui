import { ComponentType } from 'react';
import BoxComponent from './components/Box';
import TextComponent from './components/Text';
import CenterComponent from './components/Center';
import FlexComponent from './components/Flex';
import StackComponent from './components/Stack';
import ListComponent from './components/List';
import SectionListComponent from './components/SectionList';
import ImageComponent from './components/Image';
import SpinnerComponent from './components/Spinner';
import PressableComponent from './components/Pressable';
import TouchableOpacityComponent from './components/TouchableOpacity';
import TouchableHighlightComponent from './components/TouchableHighlight';
import TouchableWithoutFeedbackComponent from './components/TouchableWithoutFeedback';
import ButtonComponent from './components/Button';

type ExampleComponentType = {
  onScreenName: string;
  navigationPath: string;
  component: ComponentType;
};

export const components: ExampleComponentType[] = [
  {
    navigationPath: 'Text',
    onScreenName: 'Text',
    component: TextComponent,
  },
  { navigationPath: 'Box', onScreenName: 'Box', component: BoxComponent },
  {
    navigationPath: 'Center',
    onScreenName: 'Center',
    component: CenterComponent,
  },
  { navigationPath: 'Flex', onScreenName: 'Flex', component: FlexComponent },
  { navigationPath: 'Stack', onScreenName: 'Stack', component: StackComponent },
  { navigationPath: 'List', onScreenName: 'List', component: ListComponent },
  {
    navigationPath: 'SectionList',
    onScreenName: 'SectionList',
    component: SectionListComponent,
  },
  {
    navigationPath: 'Image',
    onScreenName: 'Image',
    component: ImageComponent,
  },
  {
    navigationPath: 'Spinner',
    onScreenName: 'Spinner',
    component: SpinnerComponent,
  },
  {
    navigationPath: 'Button',
    onScreenName: 'Button',
    component: ButtonComponent,
  },
  {
    navigationPath: 'Pressable',
    onScreenName: 'Pressable',
    component: PressableComponent,
  },
  {
    navigationPath: 'TouchableOpacity',
    onScreenName: 'TouchableOpacity',
    component: TouchableOpacityComponent,
  },
  {
    navigationPath: 'TouchableHighlight',
    onScreenName: 'TouchableHighlight',
    component: TouchableHighlightComponent,
  },
  {
    navigationPath: 'TouchableWithoutFeedback',
    onScreenName: 'TouchableWithoutFeedback',
    component: TouchableWithoutFeedbackComponent,
  },
];
