import React from 'react';

import {
  SectionList as RNSectionList,
  SectionListProps as RNSectionListProps,
} from 'react-native';

import { NativeFicusProps, ficus } from '../system';

type FicusSectionListProps<ItemT, SectionT> = RNSectionListProps<
  ItemT,
  SectionT
> &
  Omit<
    NativeFicusProps<'SectionList'>,
    keyof RNSectionListProps<ItemT, SectionT>
  >;

export function SectionList<ItemT, SectionT>(
  props: FicusSectionListProps<ItemT, SectionT>
) {
  const FicusSectionList = ficus(RNSectionList) as React.ComponentType<
    FicusSectionListProps<ItemT, SectionT>
  >;

  return <FicusSectionList {...props} />;
}
