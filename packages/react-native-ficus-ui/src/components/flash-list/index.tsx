import {
  FlashList as RNFlashList,
  FlashListProps as RNFlashListProps,
} from '@shopify/flash-list';

import { NativeFicusProps, ficus } from '../system';

type FlashListProps<ItemT> = RNFlashListProps<ItemT> &
  Omit<NativeFicusProps<'FlashList'>, keyof RNFlashListProps<ItemT>>;

const FicusFlatList = ficus(RNFlashList, {
  styleProp: 'contentContainerStyle',
}) as React.ComponentType<FlashListProps<any>>;

export function FlashList<ItemT>(props: FlashListProps<ItemT>) {
  return <FicusFlatList {...props} />;
}
