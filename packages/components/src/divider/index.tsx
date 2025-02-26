import { useMemo } from 'react';

import { ThemingProps, omitThemingProps } from '@ficus-ui/style-system';

import { type NativeFicusProps, ficus, forwardRef } from '../system';

/**
 * Layout component used to visually separate content in a list or group.
 * It displays a thin horizontal or vertical line
 */

interface DividerOptions {
  color?: string;
}

export interface DividerProps
  extends NativeFicusProps<'View'>,
    ThemingProps<'Divider'>,DividerOptions {
  orientation?: 'horizontal' | 'vertical';
}

export const Divider = forwardRef<DividerProps, 'View'>(
  function Divider(props, ref) {
    const { orientation = 'horizontal',color = 'black', ...rest } = omitThemingProps(props);
    const dividerStyles = useMemo(
      () => ({
        vertical: {
          ...props.__styles,
          w: 1,
          h: '100%',
          bg: color,
        },
        horizontal: {
          ...props.__styles,
          h: 1,
          w: '100%',
          bg: color,
        },
      }),
      [props.__styles]
    );

    return (
      <ficus.View ref={ref} {...rest} __styles={dividerStyles[orientation]} />
    );
  }
);
