import { type NativeFicusProps, ficus } from '../system';

export interface ListProps extends NativeFicusProps<'Flatlist'> {}

export const List = ficus('Flatlist');
