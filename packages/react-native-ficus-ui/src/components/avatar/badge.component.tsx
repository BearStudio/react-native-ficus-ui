import * as React from 'react';

import { useTheme } from '../../theme';
import { handleResponsiveProps } from '../../types';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Box } from '../box/box.component';
import { AvatarBadgeProps } from './avatar.type';

const AvatarBadge: React.FunctionComponent<AvatarBadgeProps> = (
  incomingProps
) => {
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'AvatarBadge',
    handleResponsiveProps(incomingProps, theme, windowWidth),
    {
      bg: 'green.400',
      w: 25,
      h: 25,
      borderRadius: '100%',
      borderWidth: 3,
      borderColor: 'white',
      borderStyle: 'solid',
    }
  );

  return <Box {...props} />;
};

export { AvatarBadge };
