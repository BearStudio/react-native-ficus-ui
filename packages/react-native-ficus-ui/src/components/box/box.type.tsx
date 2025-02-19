import type { View as RNView, ViewProps as RNViewProps } from 'react-native';

import type {
  BackgroundImgPropsType,
  BackgroundPropsType,
  BorderPropsType,
  BorderRadiusPropsType,
  DimensionPropsType,
  FlexPropsType,
  OpacityPropsType,
  OverflowPropsType,
  PositionPropsType,
  ShadowPropsType,
  SpacingPropsType,
  VariantPropsType,
  ZIndexPropsType,
} from '../../types';

export type BoxProps<T extends React.ElementType = typeof RNView> =
  RNViewProps &
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
