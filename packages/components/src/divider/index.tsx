import { useMemo } from 'react';

import { ThemingProps, omitThemingProps } from '@ficus-ui/style-system';

import { type NativeFicusProps, ficus, forwardRef } from '../system';

/**
 * Layout component used to visually separate content in a list or group.
 * It displays a thin horizontal or vertical line
 */
export interface DividerProps
  extends NativeFicusProps<'View'>,
    ThemingProps<'Divider'> {
  orientation?: 'horizontal' | 'vertical';
}

export const Divider = forwardRef<DividerProps, 'View'>(
  function Divider(props, ref) {
    const { orientation = 'horizontal', ...rest } = omitThemingProps(props);

    const dividerStyles = useMemo(
      () => ({
        vertical: {
          ...props.__styles,
          w: 1,
          h: '100%',
          bg: 'black',
        },
        horizontal: {
          ...props.__styles,
          h: 1,
          w: '100%',
          bg: 'black',
        },
      }),
      [props.__styles]
    );

    return (
      <ficus.View ref={ref} {...rest} __styles={dividerStyles[orientation]} />
    );
  }
);
