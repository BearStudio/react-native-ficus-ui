import { ViewStyle } from 'react-native';

import { t } from '../utils';
import { Config } from '../utils/prop-config';
import { ResponsiveValue } from '../utils/types';

export const flexbox: Config<FlexboxProps> = {
  flex: true,
  flexDirection: true,
  direction: t.flexbox('flexDirection'),
  flexWrap: true,
  wrap: t.flexbox('flexWrap'),
  flexBasis: true,
  basis: t.flexbox('flexBasis'),
  flexGrow: true,
  grow: t.flexbox('flexGrow'),
  flexShrink: true,
  shrink: t.flexbox('flexShrink'),
  justifyContent: true,
  justify: t.flexbox('justifyContent'),
  alignSelf: t.flexbox('alignSelf'),
  alignItems: true,
  align: t.flexbox('alignItems'),
};

type FlexDirection = ViewStyle['flexDirection'];
type FlexWrap = ViewStyle['flexWrap'];
type FlexJustify = ViewStyle['justifyContent'];
type FlexAlignSelf = ViewStyle['alignSelf'];
type FlexAlignItems = ViewStyle['alignItems'];
export interface FlexboxProps {
  flex?: ResponsiveValue<number>;
  flexDirection?: ResponsiveValue<FlexDirection>;
  direction?: ResponsiveValue<FlexDirection>;
  flexWrap?: ResponsiveValue<FlexWrap>;
  wrap?: ResponsiveValue<FlexWrap>;
  flexBasis?: ResponsiveValue<string | number>;
  basis?: ResponsiveValue<string | number>;
  flexGrow?: ResponsiveValue<number>;
  grow?: ResponsiveValue<number>;
  flexShrink?: ResponsiveValue<number>;
  shrink?: ResponsiveValue<number>;
  justifyContent?: ResponsiveValue<FlexJustify>;
  justify?: ResponsiveValue<FlexJustify>;
  alignSelf?: ResponsiveValue<FlexAlignSelf>;
  alignItems?: ResponsiveValue<FlexAlignItems>;
  align?: ResponsiveValue<FlexAlignItems>;
}
