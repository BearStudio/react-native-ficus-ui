import React from 'react';

import {
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
} from 'react-native';

import { NativeFicusProps, ficus } from '../system';

type ListProps<ItemT> = RNFlatListProps<ItemT> &
  Omit<NativeFicusProps<'FlatList'>, keyof RNFlatListProps<ItemT>>;

const FicusFlatList = ficus(RNFlatList, {
  baseStyle: { flex: 1 },
}) as React.ComponentType<any>;

export function List<ItemT>(props: ListProps<ItemT>) {
  return <FicusFlatList {...props} />;
}
