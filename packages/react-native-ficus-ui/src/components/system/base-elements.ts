import {
  BottomSheetModal as RNBottomSheetModal,
  BottomSheetView as RNBottomSheetView,
} from '@gorhom/bottom-sheet';
import RNSlider from '@react-native-community/slider';
import { FlashList as ShopifyFlashList } from '@shopify/flash-list';
import {
  ActivityIndicator as RNActivityIndicator,
  FlatList as RNFlatList,
  Image as RNImage,
  Modal as RNModal,
  Pressable as RNPressable,
  SafeAreaView as RNSafeAreaView,
  ScrollView as RNScrollView,
  SectionList as RNSectionList,
  Text as RNText,
  TextInput as RNTextInput,
  TouchableHighlight as RNTouchableHighlight,
  TouchableOpacity as RNTouchableOpacity,
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
  View as RNView,
} from 'react-native';
import { CodeField as RNCodeField } from 'react-native-confirmation-code-field';
import RNPickerSelect from 'react-native-picker-select';
import { TabView as RNTabView } from 'react-native-tab-view';

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
  Slider: RNSlider,
  FlatList: RNFlatList,
  SectionList: RNSectionList,
  FlashList: ShopifyFlashList,
  Modal: RNModal,
  BottomSheetModal: RNBottomSheetModal,
  BottomSheetView: RNBottomSheetView,
  TextInput: RNTextInput,
  CodeField: RNCodeField,
  PickerSelect: RNPickerSelect,
  TabView: RNTabView,
} as const;

export type BaseRNElements = keyof typeof baseRNElements;
