import * as React from 'react';

import type { StackProps } from './stack.type';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Stack } from './stack.component';
import { useTheme } from '../../theme';
import { handleResponsiveProps } from '../../types';

const VStack: React.FunctionComponent<StackProps> = (incomingProps) => {
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'VStack',
    handleResponsiveProps(incomingProps, theme, windowWidth),
    {
      bg: 'transparent',
      flexDirection: 'column',
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

// VStack.defaultProps = {
//   bg: 'transparent',
//   flexDirection: 'column',
//   flexWrap: 'nowrap',
//   borderRadius: 'none',
//   shadow: 'none',
//   shadowColor: 'gray900',
//   position: 'relative',
//   pointerEvents: 'auto',
//   borderStyle: 'solid',
//   spacing: 0,
// };

export { VStack };
