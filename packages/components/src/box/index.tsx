import { ficus } from '../system/factory';
import { NativeFicusProps } from '../system/system';

export interface BoxProps extends NativeFicusProps<'View'> {}

export const Box = ficus('View');

export const Circle = ficus('View', {
  baseStyle: {
    borderRadius: 'full',
  },
});
