import * as React from 'react';
import { IconButtonProps } from './icon-button.type';
import { Button } from '../button/button.component';

const IconButton: React.FunctionComponent<IconButtonProps> = ({
  icon,
  ...incomingProps
}) => {
  return (
    <Button px={undefined} {...incomingProps}>
      {icon}
    </Button>
  );
};

export { IconButton };
