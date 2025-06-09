import type { StyleProp, ViewStyle } from 'react-native';

import type { Dict, PressableStates } from '../../style-system';

export function pressableStyleFn(resolvedStyles: Dict) {
  return ({ pressed }: PressableStates): StyleProp<ViewStyle> => ({
    ...resolvedStyles,
    ...(pressed ? resolvedStyles._pressed : {}),
  });
}
