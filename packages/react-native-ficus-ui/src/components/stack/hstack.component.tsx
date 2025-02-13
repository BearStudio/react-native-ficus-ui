import * as React from 'react';

import { useTheme } from '../../theme';
import { handleResponsiveProps } from '../../types';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Stack } from './stack.component';
import type { StackProps } from './stack.type';

const HStack: React.FunctionComponent<StackProps> = (incomingProps) => {
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'HStack',
    handleResponsiveProps(incomingProps, theme, windowWidth),
    {
      bg: 'transparent',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      borderRadius: 'none',
      shadow: 'none',
      position: 'relative',
      pointerEvents: 'auto',
      borderStyle: 'solid',
      spacing: 0,
    }
  );

  return <Stack {...props} />;
};

// HStack.defaultProps = {
//   bg: 'transparent',
//   flexDirection: 'row',
//   flexWrap: 'nowrap',
//   borderRadius: 'none',
//   shadow: 'none',
//   shadowColor: 'gray900',
//   position: 'relative',
//   pointerEvents: 'auto',
//   borderStyle: 'solid',
//   spacing: 0,
// };

export { HStack };
