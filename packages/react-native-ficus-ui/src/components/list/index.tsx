import React from 'react';

import {
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
} from 'react-native';

import { NativeFicusProps, ficus } from '../system';

type ListProps<ItemT> = RNFlatListProps<ItemT> &
  Omit<NativeFicusProps<'FlatList'>, keyof RNFlatListProps<ItemT>>;

export function List<ItemT>(props: ListProps<ItemT>) {
  const FicusFlatList = ficus(RNFlatList) as React.ComponentType<
    ListProps<ItemT>
  >;
  return <FicusFlatList {...props} />;
}
