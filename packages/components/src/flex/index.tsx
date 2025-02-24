import { type NativeFicusProps, ficus } from '../system';

// TODO: Improve Box as Image API from V1
export interface FlexProps extends NativeFicusProps<'View'> {}

export const Flex = ficus('View', {
  baseStyle: {
    flex: 1,
  },
});
