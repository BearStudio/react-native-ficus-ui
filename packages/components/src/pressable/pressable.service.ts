import { Dict } from '@ficus-ui/style-system';
import type { StyleProp, ViewStyle } from 'react-native';

export function createPressableStyleFn(resolvedStyles: Dict) {
  return ({ pressed }: { pressed: boolean }): StyleProp<ViewStyle> => ({
    ...resolvedStyles,
    ...(pressed ? (resolvedStyles._pressed ?? {}) : {}),
  });
}
