import {
  ActivityIndicator as RNActivityIndicator,
  Image as RNImage,
  Pressable as RNPressable,
  SafeAreaView as RNSafeAreaView,
  ScrollView as RNScrollView,
  Text as RNText,
  TouchableHighlight as RNTouchableHighlight,
  TouchableOpacity as RNTouchableOpacity,
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
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
  SafeAreaView: RNSafeAreaView,
  TouchableHighlight: RNTouchableHighlight,
  TouchableOpacity: RNTouchableOpacity,
  TouchableWithoutFeedback: RNTouchableWithoutFeedback,
  Pressable: RNPressable,
  ActivityIndicator: RNActivityIndicator,
} as const;

export type BaseRNElements = keyof typeof baseRNElements;
