import {
  FlashList as RNFlashList,
  FlashListProps as RNFlashListProps,
} from '@shopify/flash-list';

import { NativeFicusProps, ficus } from '../system';

type FlashListProps<ItemT> = RNFlashListProps<ItemT> &
  Omit<NativeFicusProps<'FlashList'>, keyof RNFlashListProps<ItemT>>;

const FicusFlashList = ficus(RNFlashList, {
  styleProp: 'contentContainerStyle',
}) as <ItemT>(props: FlashListProps<ItemT>) => React.ReactElement;

export function FlashList<ItemT>(props: FlashListProps<ItemT>) {
  return <FicusFlashList {...props} />;
}
