import { ComponentType } from 'react';
import BoxComponent from './components-v2/Box';
import StackComponent from '@/app/components-v2/Stack';
import FlexComponent from '@/app/components-v2/Flex';
import TextComponent from '@/app/components-v2/Text';
import SafeAreaBoxComponent from '@/app/components-v2/SafeAreaBox';
import ScrollBoxComponent from '@/app/components-v2/ScrollBox';
import CenterComponent from '@/app/components-v2/Center';
import BadgeComponent from './components-v2/Badge';
import TouchableHighlightComponent from './components-v2/TouchableHighlight';
import TouchableOpacityComponent from './components-v2/TouchableOpacity';
import TouchableWithoutFeedbackComponent from './components-v2/TouchableWithoutFeedback';
import ImageComponent from '@/app/components-v2/Image';
import PressableComponent from './components-v2/Pressable';
import ButtonComponent from './components-v2/Button';
import DividerComponent from '@/app/components-v2/Divider';
import SpinnerComponent from '@/app/components-v2/Spinner';
import SliderComponent from '@/app/components-v2/Slider';
import IconComponent from '@/app/components-v2/Icon';
import IconButtonComponent from '@/app/components-v2/IconButton';
import ListComponent from '@/app/components-v2/List';
import SectionListComponent from '@/app/components-v2/SectionList';
import FlashListComponent from '@/app/components-v2/FlashList';
import ModalComponent from '@/app/components-v2/Modal';
import DraggableModalComponent from '@/app/components-v2/DraggableModal';
import AvatarComponent from '@/app/components-v2/Avatar';
import InputComponent from '@/app/components-v2/Input';
import PinInputComponent from '@/app/components-v2/PinInput';
import SwitchComponent from './components-v2/Switch';
import CheckboxComponent from './components-v2/Checkbox';
import RadioComponent from './components-v2/Radio';
import SelectComponent from './components-v2/Select';
import TabsExampleComponent from './components-v2/Tabs';

type ExampleComponentType = {
  onScreenName: string;
  navigationPath: string;
  component: ComponentType;
};

export const components: ExampleComponentType[] = [
  { navigationPath: 'Box', onScreenName: 'Box', component: BoxComponent },
  { navigationPath: 'Stack', onScreenName: 'Stack', component: StackComponent },
  { navigationPath: 'Flex', onScreenName: 'Flex', component: FlexComponent },
  { navigationPath: 'Text', onScreenName: 'Text', component: TextComponent },
  { navigationPath: 'SafeAreaBox', onScreenName: 'SafeAreaBox', component: SafeAreaBoxComponent },
  { navigationPath: 'ScrollBox', onScreenName: 'ScrollBox', component: ScrollBoxComponent },
  { navigationPath: 'Center', onScreenName: 'Center', component: CenterComponent },
  { navigationPath: 'Checkbox', onScreenName: 'Checkbox', component: CheckboxComponent },
  { navigationPath: 'Radio', onScreenName: 'Radio', component: RadioComponent },
  { navigationPath: 'Badge', onScreenName: 'Badge', component: BadgeComponent },
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
];
