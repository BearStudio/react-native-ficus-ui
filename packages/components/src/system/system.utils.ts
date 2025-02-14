import {
  type ImageProps,
  Image as RNImage,
  ScrollView as RNScrollView,
  Text as RNText,
  View as RNView,
  type ScrollViewProps,
  type TextProps,
  type ViewProps,
} from 'react-native';

const nativeElements = ['View', 'Image', 'Text', 'ScrollView'] as const;
export type NativeElements = (typeof nativeElements)[number];

export type RNBaseElementsProps = {
  View: ViewProps;
  Image: ImageProps;
  Text: TextProps;
  ScrollView: ScrollViewProps;
};

export const RNBaseElements: Record<NativeElements, any> = {
  View: RNView,
  Image: RNImage,
  Text: RNText,
  ScrollView: RNScrollView,
};

export type NativeElementProps<T extends NativeElements> =
  RNBaseElementsProps[T];
