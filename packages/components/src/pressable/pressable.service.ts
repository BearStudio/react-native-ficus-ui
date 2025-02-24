import type { Dict, PressableStates } from '@ficus-ui/style-system';
import type { StyleProp, ViewStyle } from 'react-native';

export function pressableStyleFn(resolvedStyles: Dict) {
  return ({ pressed }: PressableStates): StyleProp<ViewStyle> => ({
    ...resolvedStyles,
    ...(pressed ? resolvedStyles._pressed : {}),
  });
}
