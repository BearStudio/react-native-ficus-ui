import type { ViewProps as RNViewProps, View as RNView } from 'react-native';

import type {
  BorderPropsType,
  SpacingPropsType,
  BorderRadiusPropsType,
  ShadowPropsType,
  DimensionPropsType,
  BackgroundPropsType,
  BackgroundImgPropsType,
  FlexPropsType,
  PositionPropsType,
  ZIndexPropsType,
  OverflowPropsType,
  OpacityPropsType,
  VariantPropsType,
} from '../../types';

export type BoxProps<
  T extends React.ElementType = typeof RNView
> = RNViewProps &
  BorderPropsType &
  SpacingPropsType &
  BorderRadiusPropsType &
  ShadowPropsType &
  DimensionPropsType &
  BackgroundPropsType &
  BackgroundImgPropsType &
  FlexPropsType &
  PositionPropsType &
  ZIndexPropsType &
  OverflowPropsType &
  OpacityPropsType &
  VariantPropsType &
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
  };
