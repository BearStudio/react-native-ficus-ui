import { useMemo } from 'react';

import { type NativeFicusProps, ficus, forwardRef } from '../system';

interface DividerOptions {
  color?: string;
  orientation?: 'horizontal' | 'vertical';
}

export interface DividerProps
  extends NativeFicusProps<'View'>,
    DividerOptions {}

/**
 * Layout component used to visually separate content in a list or group.
 * It displays a thin horizontal or vertical line
 */
export const Divider = forwardRef<DividerProps, 'View'>(
  function Divider(props, ref) {
    const {
      orientation = 'horizontal',
      color = 'black',
      __styles,
      ...rest
    } = props;

    const dividerStyles = useMemo(() => {
      const bg = color;

      return {
        vertical: {
          w: 1,
          h: '100%',
          bg,
        },
        horizontal: {
          h: 1,
          w: '100%',
          bg,
        },
      };
    }, [color]);

    return (
      <ficus.View
        ref={ref}
        {...rest}
        __styles={{
          ...dividerStyles[orientation],
          ...__styles,
        }}
      />
    );
  }
);
