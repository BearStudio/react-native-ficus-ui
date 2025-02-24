import { NativeFicusProps, ficus } from '../system';

export interface CenterProps extends NativeFicusProps<'View'> {}

export const Center = ficus('View', {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
