import { type NativeFicusProps, ficus } from '../system';

export interface ScrollBoxProps extends NativeFicusProps<'ScrollView'> {}

export const ScrollBox = ficus('ScrollView');
