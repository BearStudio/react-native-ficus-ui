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
import IconComponent from './components/Icon';
import SwitchComponent from './components/Switch';
import InputComponent from './components/Input';
import SelectComponent from './components/Select';
import CheckboxComponent from './components/Checkbox';
import RadioComponent from './components/Radio';
import ToastHook from './components/Toast';
import ModalComponent from './components/Modal';
import FlashListComponent from './components/FlashList';
import SafeAreaBoxComponent from './components/SafeAreaBox';
import DividerComponent from './components/Divider';
import TabsComponent from './components/Tabs';

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
    navigationPath: 'Divider',
    onScreenName: 'Divider',
    component: DividerComponent,
  },
  {
    navigationPath: 'SafeAreaBox',
    onScreenName: 'SafeAreaBox',
    component: SafeAreaBoxComponent,
  },
  {
    navigationPath: 'Center',
    onScreenName: 'Center',
    component: CenterComponent,
  },
  { navigationPath: 'Flex', onScreenName: 'Flex', component: FlexComponent },
  { navigationPath: 'Stack', onScreenName: 'Stack', component: StackComponent },
  { navigationPath: 'List', onScreenName: 'List', component: ListComponent },
  {
    navigationPath: 'FlashList',
    onScreenName: 'FlashList',
    component: FlashListComponent,
  },
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
    navigationPath: 'Icon',
    onScreenName: 'Icon',
    component: IconComponent,
  },
  {
    navigationPath: 'Input',
    onScreenName: 'Input',
    component: InputComponent,
  },
  {
    navigationPath: 'Select',
    onScreenName: 'Select',
    component: SelectComponent,
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
  {
    navigationPath: 'Switch',
    onScreenName: 'Switch',
    component: SwitchComponent,
  },
  {
    navigationPath: 'Checkbox',
    onScreenName: 'Checkbox',
    component: CheckboxComponent,
  },
  {
    navigationPath: 'Radio',
    onScreenName: 'Radio',
    component: RadioComponent,
  },
  {
    navigationPath: 'Toast',
    onScreenName: 'Toast',
    component: ToastHook,
  },
  {
    navigationPath: 'Modal',
    onScreenName: 'Modal',
    component: ModalComponent,
  },
  {
    navigationPath: 'Tabs',
    onScreenName: 'Tabs',
    component: TabsComponent,
  },
];
