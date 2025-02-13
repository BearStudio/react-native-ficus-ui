import type { TouchableHighlightProps as RNTouchableHighlightProps } from 'react-native';

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

export interface TouchableHighlightProps
  extends RNTouchableHighlightProps,
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
