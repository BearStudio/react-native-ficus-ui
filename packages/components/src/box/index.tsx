import { ImageSourcePropType } from 'react-native';

import { type NativeFicusProps, ficus, forwardRef } from '../system';

interface BoxOptions {
  bgImg?: ImageSourcePropType;
  bgMode?: 'contain' | 'cover' | 'stretch' | 'repeat';
}

export interface BoxProps extends NativeFicusProps<'View'>, BoxOptions {}

/**
 * Boxs help you easily create flexible and automatically distributed layouts
 *
 * You can Box elements in the horizontal or vertical direction,
 * and apply a space or/and divider between each element.
 *
 */
export const Box = forwardRef<BoxProps, 'View'>((props, ref) => {
  const { bgImg, bgMode, ...rest } = props;
  if (bgImg) {
    return (
      <ficus.Image ref={ref} source={bgImg} resizeMode={bgMode} {...rest} />
    );
  }
  return <ficus.View ref={ref} {...rest} />;
});

export const Circle = ficus('View', {
  baseStyle: {
    borderRadius: 'full',
  },
});
