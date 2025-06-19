import type { StyleProp, ViewStyle } from 'react-native';

import type { Dict, PressableStates } from '../../style-system';
import { ColorMode } from '../../theme/context';

export function pressableStyleFn(resolvedStyles: Dict, colorMode: ColorMode) {
  return ({ pressed }: PressableStates): StyleProp<ViewStyle> => ({
    ...resolvedStyles,
    ...(pressed
      ? colorMode === 'dark'
        ? { ...resolvedStyles._pressed, ...resolvedStyles._pressed?._dark }
        : resolvedStyles._pressed
      : {}),
  });
}
