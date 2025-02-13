import type { ViewProps as RNViewProps } from 'react-native';

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
  TextPropsType,
} from '../../types';

export interface BadgeProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    BorderRadiusPropsType,
    ShadowPropsType,
    DimensionPropsType,
    BackgroundPropsType,
    TextPropsType,
    FlexPropsType,
    PositionPropsType,
    ZIndexPropsType,
    OverflowPropsType,
    OpacityPropsType,
    VariantPropsType {
  colorScheme?: string;
  children: string;
}
