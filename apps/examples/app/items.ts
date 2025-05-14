import { ComponentType } from 'react';
import BoxComponent from './components/Box';
import StackComponent from '@/app/components/Stack';
import FlexComponent from '@/app/components/Flex';
import TextComponent from '@/app/components/Text';
import SafeAreaBoxComponent from '@/app/components/SafeAreaBox';
import ScrollBoxComponent from '@/app/components/ScrollBox';
import CenterComponent from '@/app/components/Center';
import BadgeComponent from '@/app/components/Badge';
import TouchableHighlightComponent from '@/app/components/TouchableHighlight';
import TouchableOpacityComponent from '@/app/components/TouchableOpacity';
import TouchableWithoutFeedbackComponent from '@/app/components/TouchableWithoutFeedback';
import ImageComponent from '@/app/components/Image';
import PressableComponent from '@/app/components/Pressable';
import ButtonComponent from './components/Button';
import DividerComponent from '@/app/components/Divider';
import SpinnerComponent from '@/app/components/Spinner';
import SliderComponent from '@/app/components/Slider';
import IconComponent from '@/app/components/Icon';
import IconButtonComponent from '@/app/components/IconButton';
import ListComponent from '@/app/components/List';
import SectionListComponent from '@/app/components/SectionList';
import FlashListComponent from '@/app/components/FlashList';
import ModalComponent from '@/app/components/Modal';
import DraggableModalComponent from '@/app/components/DraggableModal';
import AvatarComponent from '@/app/components/Avatar';
import InputComponent from '@/app/components/Input';
import PinInputComponent from '@/app/components/PinInput';
import SwitchComponent from './components/Switch';
import CheckboxComponent from './components/Checkbox';
import RadioComponent from './components/Radio';
import SelectComponent from './components/Select';
import TabsExampleComponent from './components/Tabs';
import ToastHook from './components/Toast';

type ExampleComponentType = {
  onScreenName: string;
  navigationPath: string;
  component: ComponentType;
};

export const components: ExampleComponentType[] = [
  { navigationPath: 'Avatar', onScreenName: 'Avatar', component: AvatarComponent },
  { navigationPath: 'Badge', onScreenName: 'Badge', component: BadgeComponent },
  { navigationPath: 'Box', onScreenName: 'Box', component: BoxComponent },
  { navigationPath: 'Button', onScreenName: 'Button', component: ButtonComponent },
  { navigationPath: 'Stack', onScreenName: 'Stack', component: StackComponent },
  { navigationPath: 'Center', onScreenName: 'Center', component: CenterComponent },
  { navigationPath: 'Checkbox', onScreenName: 'Checkbox', component: CheckboxComponent },
  { navigationPath: 'Divider', onScreenName: 'Divider', component: DividerComponent },
  { navigationPath: 'DraggableModal', onScreenName: 'DraggableModal', component: DraggableModalComponent },
  { navigationPath: 'FlashList', onScreenName: 'FlashList', component: FlashListComponent },
  { navigationPath: 'IconButton', onScreenName: 'IconButton', component: IconButtonComponent },
  { navigationPath: 'Icon', onScreenName: 'Icon', component: IconComponent },
  { navigationPath: 'Image', onScreenName: 'Image', component: ImageComponent },
  { navigationPath: 'Input', onScreenName: 'Input', component: InputComponent },
  { navigationPath: 'Flex', onScreenName: 'Flex', component: FlexComponent },
  { navigationPath: 'List', onScreenName: 'List', component: ListComponent },
  { navigationPath: 'Modal', onScreenName: 'Modal', component: ModalComponent },
  { navigationPath: 'PinInput', onScreenName: 'PinInput', component: PinInputComponent },
  { navigationPath: 'Pressable', onScreenName: 'Pressable', component: PressableComponent },
  { navigationPath: 'Radio', onScreenName: 'Radio', component: RadioComponent },
  { navigationPath: 'SafeAreaBox', onScreenName: 'SafeAreaBox', component: SafeAreaBoxComponent },
  { navigationPath: 'ScrollBox', onScreenName: 'ScrollBox', component: ScrollBoxComponent },
  { navigationPath: 'SectionList', onScreenName: 'SectionList', component: SectionListComponent },
  { navigationPath: 'Select', onScreenName: 'Select', component: SelectComponent },
  { navigationPath: 'Slider', onScreenName: 'Slider', component: SliderComponent },
  { navigationPath: 'Spinner', onScreenName: 'Spinner', component: SpinnerComponent },
  { navigationPath: 'Switch', onScreenName: 'Switch', component: SwitchComponent },
  { navigationPath: 'Tabs', onScreenName: 'Tabs', component: TabsExampleComponent },
  { navigationPath: 'Text', onScreenName: 'Text', component: TextComponent },
  { navigationPath: 'TouchableHighlight', onScreenName: 'TouchableHighlight', component: TouchableHighlightComponent },
  { navigationPath: 'TouchableOpacity', onScreenName: 'TouchableOpacity', component: TouchableOpacityComponent },
  { navigationPath: 'TouchableWithoutFeedback', onScreenName: 'TouchableWithoutFeedback', component: TouchableWithoutFeedbackComponent },
  { navigationPath: 'Image', onScreenName: 'Image', component: ImageComponent },
  { navigationPath: 'Button', onScreenName: 'Button', component: ButtonComponent },
  { navigationPath: 'Divider', onScreenName: 'Divider', component: DividerComponent },
  { navigationPath: 'Spinner', onScreenName: 'Spinner', component: SpinnerComponent },
  { navigationPath: 'Pressable', onScreenName: 'Pressable', component: PressableComponent },
  { navigationPath: 'Slider', onScreenName: 'Slider', component: SliderComponent },
  { navigationPath: 'Switch', onScreenName: 'Switch', component: SwitchComponent },
  { navigationPath: 'Icon', onScreenName: 'Icon', component: IconComponent },
  { navigationPath: 'IconButton', onScreenName: 'IconButton', component: IconButtonComponent },
  { navigationPath: 'List', onScreenName: 'List', component: ListComponent },
  { navigationPath: 'SectionList', onScreenName: 'SectionList', component: SectionListComponent },
  { navigationPath: 'FlashList', onScreenName: 'FlashList', component: FlashListComponent },
  { navigationPath: 'Modal', onScreenName: 'Modal', component: ModalComponent },
  { navigationPath: 'DraggableModal', onScreenName: 'DraggableModal', component: DraggableModalComponent },
  { navigationPath: 'Avatar', onScreenName: 'Avatar', component: AvatarComponent },
  { navigationPath: 'Input', onScreenName: 'Input', component: InputComponent },
  { navigationPath: 'PinInput', onScreenName: 'PinInput', component: PinInputComponent },
  { navigationPath: 'Select', onScreenName: 'Select', component: SelectComponent },
  { navigationPath: 'Tabs', onScreenName: 'Tabs', component: TabsExampleComponent },
  { navigationPath: 'Toast', onScreenName: 'Toast', component: ToastHook },
];
