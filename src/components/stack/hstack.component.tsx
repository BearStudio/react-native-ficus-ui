import * as React from 'react';

import type { StackProps } from './stack.type';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Stack } from './stack.component';

const HStack: React.FunctionComponent<StackProps> = (incomingProps) => {
  const props = useDefaultProps('HStack', incomingProps, {
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

// HStack.defaultProps = {
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

export { HStack };
