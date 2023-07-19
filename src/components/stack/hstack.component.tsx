import * as React from 'react';
import { View as RNView } from 'react-native';

import { getStyle } from './stack.style';
import type { StackProps } from './stack.type';
import { useTheme } from '../../theme/theme.hook';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Stack } from './stack.component';

const HStack: React.FunctionComponent<StackProps> = (incomingProps) => {
  const props = useDefaultProps('VStack', incomingProps, {
    bg: 'transparent',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    borderRadius: 'none',
    shadow: 'none',
    position: 'relative',
    bgMode: 'cover',
    pointerEvents: 'auto',
    borderStyle: 'solid',
    spacing: 0,
  });

  return <Stack {...props} />;
};

// VStack.defaultProps = {
//   bg: 'transparent',
//   flexDirection: 'row',
//   flexWrap: 'nowrap',
//   borderRadius: 'none',
//   shadow: 'none',
//   shadowColor: 'gray900',
//   position: 'relative',
//   bgMode: 'cover',
//   pointerEvents: 'auto',
//   borderStyle: 'solid',
//   spacing: 0,
// };

export { VStack };
