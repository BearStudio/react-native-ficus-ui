import * as React from 'react';

import type { StackProps } from './stack.type';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Stack } from './stack.component';

const VStack: React.FunctionComponent<StackProps> = (incomingProps) => {
  const props = useDefaultProps('VStack', incomingProps, {
    bg: 'transparent',
    flexDirection: 'column',
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
//   flexDirection: 'column',
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
