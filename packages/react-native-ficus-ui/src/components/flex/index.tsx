import { type NativeFicusProps, ficus } from '../system';

export interface FlexProps extends NativeFicusProps<'View'> {}

export const Flex = ficus('View', {
  baseStyle: {
    flex: 1,
  },
});
