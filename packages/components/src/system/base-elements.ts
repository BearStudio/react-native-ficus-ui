import {
  Image as RNImage,
  Pressable as RNPressable,
  ScrollView as RNScrollView,
  Text as RNText,
  View as RNView,
} from 'react-native';

/**
 * These are the basic react native elements that are supported with the `ficus.View` notation.
 */
export const baseRNElements = {
  View: RNView,
  Image: RNImage,
  Text: RNText,
  ScrollView: RNScrollView,
  Pressable: RNPressable,
} as const;

export type BaseRNElements = keyof typeof baseRNElements;

export type BaseRNElementProps<T extends BaseRNElements> = React.ComponentProps<
  (typeof baseRNElements)[T]
>;
