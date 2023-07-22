import type { ImageProps as RNImageProps } from 'react-native';

import type {
  BorderPropsType,
  SpacingPropsType,
  BorderRadiusPropsType,
  ShadowPropsType,
  DimensionPropsType,
  BackgroundPropsType,
  FlexPropsType,
  PositionPropsType,
  ZIndexPropsType,
  OverflowPropsType,
  OpacityPropsType,
  VariantPropsType,
} from 'types';

export interface ImageProps
  extends RNImageProps,
    BorderPropsType,
    SpacingPropsType,
    BorderRadiusPropsType,
    ShadowPropsType,
    DimensionPropsType,
    BackgroundPropsType,
    FlexPropsType,
    PositionPropsType,
    ZIndexPropsType,
    OverflowPropsType,
    OpacityPropsType,
    VariantPropsType {}
