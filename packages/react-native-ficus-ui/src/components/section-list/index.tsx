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

const FicusSectionList = ficus(RNSectionList) as <ItemT, SectionT>(
  props: FicusSectionListProps<ItemT, SectionT>
) => React.ReactElement;

export function SectionList<ItemT, SectionT>(
  props: FicusSectionListProps<ItemT, SectionT>
) {
  return <FicusSectionList {...props} />;
}
