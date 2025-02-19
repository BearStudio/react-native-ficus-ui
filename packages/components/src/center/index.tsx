import React from 'react';

import { NativeFicusProps, ficus, forwardRef } from '../system';

export interface CenterProps extends NativeFicusProps<'View'> {}

export const Center = ficus('View', {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export interface AbsoluteCenterProps extends NativeFicusProps<'View'> {
  axis?: 'horizontal' | 'vertical' | 'both';
}

const centerStyles = {
  horizontal: {
    insetStart: '50%',
    transform: 'translateX(-50%)',
  },
  vertical: {
    top: '50%',
    transform: 'translateY(-50%)',
  },
  both: {
    insetStart: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const AbsoluteCenter = forwardRef<AbsoluteCenterProps, 'View'>(
  function AbsoluteCenter(props, ref) {
    const { axis = 'both', ...rest } = props;
    return (
      <ficus.View
        ref={ref}
        __css={centerStyles[axis]}
        {...rest}
        position="absolute"
      />
    );
  }
);
