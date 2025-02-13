import type { ViewProps as RNViewProps } from 'react-native';

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

export interface FlexProps
  extends RNViewProps,
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
    VariantPropsType {}
