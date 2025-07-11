import { NativeFicusProps, ficus } from '../system';

export interface SafeAreaBoxProps extends NativeFicusProps<'SafeAreaView'> {}

export const SafeAreaBox = ficus('SafeAreaView', {
  baseStyle: {
    flex: 1,
  },
});
