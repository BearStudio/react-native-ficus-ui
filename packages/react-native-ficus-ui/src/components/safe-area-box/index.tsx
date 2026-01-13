import { SafeAreaView } from 'react-native-safe-area-context';

import { NativeFicusProps, ficus } from '../system';

export interface SafeAreaBoxProps
  extends NativeFicusProps<typeof SafeAreaView> {}

export const SafeAreaBox = ficus(SafeAreaView, {
  baseStyle: {
    flex: 1,
  },
});
