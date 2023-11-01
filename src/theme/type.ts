import type { TextProps } from 'components/text/text.type';
import type { ThemeProps, VariantType } from '../types';
import type { BoxProps } from 'components/box/box.type';
import type { SafeAreaBoxProps } from 'components/safeareabox/safeareabox.type';
import type { StackProps } from 'components/stack/stack.type';
import type { FlexProps } from 'components/flex/flex.type';
import type { CenterProps } from 'components/center/center.type';
import type { ScrollBoxProps } from 'components/scrollbox/scrollbox.type';
import type { TouchableOpacityProps } from 'components/touchable-opacity/touchable-opacity.type';
import type { TouchableHighlightProps } from 'components/touchable-highlight/touchable-highlight.type';
import type { TouchableWithoutFeedbackProps } from 'components/touchable-without-feedback/touchable-without-feedback.type';
import type { PressableProps } from 'components/pressable/pressable.type';
import type { SpinnerProps } from 'components/spinner/spinner.type';
import type { FlashListProps } from 'components/flashlist/flashlist.type';
import type { ListProps } from 'components/list/list.type';
import type { SectionListProps } from 'components/sectionlist/sectionlist.type';
import type { ImageProps } from 'components/image/image.type';
import type { ButtonProps } from 'components/button/button.type';
import type { IconProps } from 'components/icon/icon.type';
import type { SwitchProps } from 'components/switch/switch.type';
import type { InputProps } from 'components/input/input.type';
import type { SelectProps } from 'components/select/select.type';
import type { TextareaProps } from 'components/input/textarea.type';
import type { SelectOptionProps } from 'components/select/select.option.type';
import type {
  CheckboxProps,
  CheckboxGroupProps,
} from 'components/checkbox/checkbox.type';
import type { RadioGroupProps, RadioProps } from 'components/radio/radio.type';
import type { ModalProps } from 'components/modal/modal.type';
import { ToastProps } from 'react-native-toast-message';
import type { DividerProps } from 'components/divider/divider.type';

export interface ColorHues {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface ThemeType {
  components?: {
    Text?: VariantType<TextProps>;
    Box?: VariantType<BoxProps>;
    SafeAreaBox?: VariantType<SafeAreaBoxProps>;
    Flex?: VariantType<FlexProps>;
    Center?: VariantType<CenterProps>;
    ScrollBox?: VariantType<ScrollBoxProps>;
    Stack?: VariantType<StackProps>;
    HStack?: VariantType<StackProps>;
    VStack?: VariantType<StackProps>;
    TouchableOpacity?: VariantType<TouchableOpacityProps>;
    TouchableHighlight?: VariantType<TouchableHighlightProps>;
    TouchableWithoutFeedback?: VariantType<TouchableWithoutFeedbackProps>;
    Pressable?: VariantType<PressableProps>;
    Spinner?: VariantType<SpinnerProps>;
    FlashList?: VariantType<FlashListProps>;
    List?: VariantType<ListProps>;
    SectionList?: VariantType<SectionListProps>;
    Image?: VariantType<ImageProps>;
    Button?: VariantType<ButtonProps>;
    Icon?: VariantType<IconProps>;
    Switch?: VariantType<SwitchProps>;
    Input?: VariantType<InputProps>;
    Textarea?: VariantType<TextareaProps>;
    Select?: VariantType<SelectProps>;
    Option?: VariantType<SelectOptionProps>;
    Checkbox?: VariantType<CheckboxProps>;
    CheckboxGroup?: VariantType<CheckboxGroupProps>;
    Radio?: VariantType<RadioProps>;
    RadioGroup?: VariantType<RadioGroupProps>;
    Modal?: VariantType<ModalProps>;
    Divider?: VariantType<DividerProps>;
  };

  fontFamily?: {
    normal?: string;
    bold?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  };

  colors?: ThemeProps<string | ColorHues>;
  fontSize?: ThemeProps<number>;
  borderRadius?: { none: 0; full: 99999 } & ThemeProps<number>;
  spacing?: { none: 0 } & ThemeProps<number>;
  stackSpacing?: { none: 0 } & ThemeProps<number>;
  shadowColor?: string;
  shadow?: ThemeProps<{
    shadowOffset?: {
      width: number;
      height: number;
    };
    shadowOpacity?: number;
    shadowRadius?: number;
    elevation?: number;
  }>;
  name?: string;
  spinner?: ThemeProps<string | number>;
  checkbox?: ThemeProps<string | number>;
  radio?: ThemeProps<string | number>;
  toastProps?: ToastProps;
}
