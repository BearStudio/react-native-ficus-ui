import type { ViewProps as RNViewProps } from 'react-native';

import type {
  BorderPropsType,
  SpacingPropsType,
  BorderRadiusPropsType,
  ShadowPropsType,
  DimensionPropsType,
  FlexPropsType,
  PositionPropsType,
  ZIndexPropsType,
  OverflowPropsType,
  OpacityPropsType,
  VariantPropsType,
  OrientationPropsType,
} from '@/types';

export interface DividerProps
  extends RNViewProps,
    OrientationPropsType,
    BorderPropsType,
    SpacingPropsType,
    BorderRadiusPropsType,
    ShadowPropsType,
    DimensionPropsType,
    FlexPropsType,
    PositionPropsType,
    ZIndexPropsType,
    OverflowPropsType,
    OpacityPropsType,
    VariantPropsType {
  colorScheme?: string;
  size?: number;
}
