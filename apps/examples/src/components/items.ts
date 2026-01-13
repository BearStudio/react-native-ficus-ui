import { ComponentType } from 'react';

import AvatarComponent from '@/src/components/Avatar';
import BadgeComponent from '@/src/components/Badge';
import BoxComponent from '@/src/components/Box';
import ButtonComponent from '@/src/components/Button';
import CenterComponent from '@/src/components/Center';
import CheckboxComponent from '@/src/components/Checkbox';
import DividerComponent from '@/src/components/Divider';
import DraggableModalComponent from '@/src/components/DraggableModal';
import FlashListComponent from '@/src/components/FlashList';
import FlexComponent from '@/src/components/Flex';
import IconComponent from '@/src/components/Icon';
import IconButtonComponent from '@/src/components/IconButton';
import ImageComponent from '@/src/components/Image';
import InputComponent from '@/src/components/Input';
import ListComponent from '@/src/components/List';
import ModalComponent from '@/src/components/Modal';
import PinInputComponent from '@/src/components/PinInput';
import PressableComponent from '@/src/components/Pressable';
import RadioComponent from '@/src/components/Radio';
import SafeAreaBoxComponent from '@/src/components/SafeAreaBox';
import ScrollBoxComponent from '@/src/components/ScrollBox';
import SectionListComponent from '@/src/components/SectionList';
import SelectComponent from '@/src/components/Select';
import SliderComponent from '@/src/components/Slider';
import SpinnerComponent from '@/src/components/Spinner';
import StackComponent from '@/src/components/Stack';
import SwitchComponent from '@/src/components/Switch';
import TabsExampleComponent from '@/src/components/Tabs';
import TextComponent from '@/src/components/Text';
import ToastHook from '@/src/components/Toast';
import TouchableHighlightComponent from '@/src/components/TouchableHighlight';
import TouchableOpacityComponent from '@/src/components/TouchableOpacity';
import TouchableWithoutFeedbackComponent from '@/src/components/TouchableWithoutFeedback';

type ExampleComponentType = {
  onScreenName: string;
  navigationPath: string;
  component: ComponentType;
};

export const components: ExampleComponentType[] = [
  {
    navigationPath: 'Avatar',
    onScreenName: 'Avatar',
    component: AvatarComponent,
  },
  { navigationPath: 'Badge', onScreenName: 'Badge', component: BadgeComponent },
  { navigationPath: 'Box', onScreenName: 'Box', component: BoxComponent },
  {
    navigationPath: 'Button',
    onScreenName: 'Button',
    component: ButtonComponent,
  },
  {
    navigationPath: 'Center',
    onScreenName: 'Center',
    component: CenterComponent,
  },
  {
    navigationPath: 'Checkbox',
    onScreenName: 'Checkbox',
    component: CheckboxComponent,
  },
  {
    navigationPath: 'Divider',
    onScreenName: 'Divider',
    component: DividerComponent,
  },
  {
    navigationPath: 'DraggableModal',
    onScreenName: 'DraggableModal',
    component: DraggableModalComponent,
  },
  {
    navigationPath: 'FlashList',
    onScreenName: 'FlashList',
    component: FlashListComponent,
  },
  { navigationPath: 'Flex', onScreenName: 'Flex', component: FlexComponent },
  { navigationPath: 'Icon', onScreenName: 'Icon', component: IconComponent },
  {
    navigationPath: 'IconButton',
    onScreenName: 'IconButton',
    component: IconButtonComponent,
  },
  { navigationPath: 'Image', onScreenName: 'Image', component: ImageComponent },
  { navigationPath: 'Input', onScreenName: 'Input', component: InputComponent },
  { navigationPath: 'List', onScreenName: 'List', component: ListComponent },
  { navigationPath: 'Modal', onScreenName: 'Modal', component: ModalComponent },
  {
    navigationPath: 'PinInput',
    onScreenName: 'PinInput',
    component: PinInputComponent,
  },
  {
    navigationPath: 'Pressable',
    onScreenName: 'Pressable',
    component: PressableComponent,
  },
  { navigationPath: 'Radio', onScreenName: 'Radio', component: RadioComponent },
  {
    navigationPath: 'SafeAreaBox',
    onScreenName: 'SafeAreaBox',
    component: SafeAreaBoxComponent,
  },
  {
    navigationPath: 'ScrollBox',
    onScreenName: 'ScrollBox',
    component: ScrollBoxComponent,
  },
  {
    navigationPath: 'SectionList',
    onScreenName: 'SectionList',
    component: SectionListComponent,
  },
  {
    navigationPath: 'Select',
    onScreenName: 'Select',
    component: SelectComponent,
  },
  {
    navigationPath: 'Slider',
    onScreenName: 'Slider',
    component: SliderComponent,
  },
  {
    navigationPath: 'Spinner',
    onScreenName: 'Spinner',
    component: SpinnerComponent,
  },
  { navigationPath: 'Stack', onScreenName: 'Stack', component: StackComponent },
  {
    navigationPath: 'Switch',
    onScreenName: 'Switch',
    component: SwitchComponent,
  },
  {
    navigationPath: 'Tabs',
    onScreenName: 'Tabs',
    component: TabsExampleComponent,
  },
  { navigationPath: 'Text', onScreenName: 'Text', component: TextComponent },
  { navigationPath: 'Toast', onScreenName: 'Toast', component: ToastHook },
  {
    navigationPath: 'TouchableHighlight',
    onScreenName: 'TouchableHighlight',
    component: TouchableHighlightComponent,
  },
  {
    navigationPath: 'TouchableOpacity',
    onScreenName: 'TouchableOpacity',
    component: TouchableOpacityComponent,
  },
  {
    navigationPath: 'TouchableWithoutFeedback',
    onScreenName: 'TouchableWithoutFeedback',
    component: TouchableWithoutFeedbackComponent,
  },
];
