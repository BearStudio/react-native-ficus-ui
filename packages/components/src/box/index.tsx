import { type NativeFicusProps, ficus } from '../system';

// TODO: Improve Box as Image API from V1
export interface BoxProps extends NativeFicusProps<'View'> {}

export const Box = ficus('View');

export const Circle = ficus('View', {
  baseStyle: {
    borderRadius: 'full',
  },
});
