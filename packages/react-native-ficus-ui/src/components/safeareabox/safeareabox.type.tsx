import type { ViewProps as RNViewProps } from 'react-native';

import type {
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

export interface SafeAreaBoxProps
  extends RNViewProps,
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
