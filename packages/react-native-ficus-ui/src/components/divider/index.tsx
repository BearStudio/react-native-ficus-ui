import { useMemo } from 'react';

import { useColorMode } from '../../hooks';
import { ThemingProps, omitThemingProps } from '../../style-system';
import {
  type NativeFicusProps,
  ficus,
  forwardRef,
  useMultiStyleConfig,
} from '../system';

interface DividerOptions {
  color?: string;
  orientation?: 'horizontal' | 'vertical';
}

export interface DividerProps
  extends NativeFicusProps<'View'>,
    DividerOptions,
    ThemingProps<'Divider'> {}

/**
 * Layout component used to visually separate content in a list or group.
 * It displays a thin horizontal or vertical line
 */
export const Divider = forwardRef<DividerProps, 'View'>((props, ref) => {
  const { colorMode } = useColorMode();
  const themingProps = omitThemingProps(props);

  const {
    orientation = 'horizontal',
    __styles,
    color: colorProp,
    ...rest
  } = themingProps;

  const styles = useMultiStyleConfig('Divider', props);

  const color =
    colorProp ??
    (styles.color as string) ??
    (colorMode === 'dark' ? 'white' : 'black');

  const dividerStyles = useMemo(() => {
    const base = { ...styles, bg: color };
    return {
      vertical: { w: 1, h: '100%', ...base },
      horizontal: { h: 1, w: '100%', ...base },
    };
  }, [color, styles]);

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
});
