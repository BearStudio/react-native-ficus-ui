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
import DividerComponent from '@/app/components-v2/Divider';
import SpinnerComponent from '@/app/components-v2/Spinner';
import SliderComponent from '@/app/components-v2/Slider';
import IconComponent from '@/app/components-v2/Icon';
import ListComponent from '@/app/components-v2/List';
import SectionListComponent from '@/app/components-v2/SectionList';
import FlashListComponent from '@/app/components-v2/FlashList';
import ModalComponent from '@/app/components-v2/Modal';

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
  { navigationPath: 'Badge', onScreenName: 'Badge', component: BadgeComponent },
  { navigationPath: 'TouchableHighlight', onScreenName: 'TouchableHighlight', component: TouchableHighlightComponent },
  { navigationPath: 'TouchableOpacity', onScreenName: 'TouchableOpacity', component: TouchableOpacityComponent },
  { navigationPath: 'TouchableWithoutFeedback', onScreenName: 'TouchableWithoutFeedback', component: TouchableWithoutFeedbackComponent },
  { navigationPath: 'Image', onScreenName: 'Image', component: ImageComponent },
  { navigationPath: 'Divider', onScreenName: 'Divider', component: DividerComponent },
  { navigationPath: 'Spinner', onScreenName: 'Spinner', component: SpinnerComponent },
  { navigationPath: 'Pressable', onScreenName: 'Pressable', component: PressableComponent },
  { navigationPath: 'Slider', onScreenName: 'Slider', component: SliderComponent },
  { navigationPath: 'Icon', onScreenName: 'Icon', component: IconComponent },
  { navigationPath: 'List', onScreenName: 'List', component: ListComponent },
  { navigationPath: 'SectionList', onScreenName: 'SectionList', component: SectionListComponent },
  { navigationPath: 'FlashList', onScreenName: 'FlashList', component: FlashListComponent },
  { navigationPath: 'Modal', onScreenName: 'Modal', component: ModalComponent },
];
