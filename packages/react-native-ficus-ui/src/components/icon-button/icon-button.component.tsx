import * as React from 'react';

import { getThemeProperty, useTheme } from '../../theme';
import { Button } from '../button/button.component';
import { IconButtonProps } from './icon-button.type';

const IconButton: React.FunctionComponent<IconButtonProps> = ({
  icon,
  size = 'md',
  ...incomingProps
}) => {
  const { theme } = useTheme();
  return (
    <Button
      px={undefined}
      py={undefined}
      w={
        getThemeProperty(theme.button, size)?.height -
        (incomingProps.variant === 'outline' ? 1 : 0)
      }
      h={
        getThemeProperty(theme.button, size)?.height -
        (incomingProps.variant === 'outline' ? 1 : 0)
      }
      size={size}
      {...incomingProps}
    >
      {icon}
    </Button>
  );
};

export { IconButton };
