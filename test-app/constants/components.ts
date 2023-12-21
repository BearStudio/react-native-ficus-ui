import { ComponentType } from 'react';
import BoxComponent from '../app/components/Box';
import TextComponent from '../app/components/Text';
import CenterComponent from '../app/components/Center';
import FlexComponent from '../app/components/Flex';
import StackComponent from '../app/components/Stack';
import ListComponent from '../app/components/List';
import SectionListComponent from '../app/components/SectionList';
import ImageComponent from '../app/components/Image';
import SpinnerComponent from '../app/components/Spinner';
import PressableComponent from '../app/components/Pressable';
import TouchableOpacityComponent from '../app/components/TouchableOpacity';
import TouchableHighlightComponent from '../app/components/TouchableHighlight';
import TouchableWithoutFeedbackComponent from '../app/components/TouchableWithoutFeedback';
import ButtonComponent from '../app/components/Button';
import IconComponent from '../app/components/Icon';
import SwitchComponent from '../app/components/Switch';
import InputComponent from '../app/components/Input';
import SelectComponent from '../app/components/Select';
import CheckboxComponent from '../app/components/Checkbox';
import RadioComponent from '../app/components/Radio';
import ToastHook from '../app/components/Toast';
import ModalComponent from '../app/components/Modal';
import FlashListComponent from '../app/components/FlashList';
import SafeAreaBoxComponent from '../app/components/SafeAreaBox';
import DividerComponent from '../app/components/Divider';

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
];
