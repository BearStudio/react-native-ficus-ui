import type { TextProps as RNTextProps } from 'react-native';

import type {
  BackgroundPropsType,
  BorderPropsType,
  BorderRadiusPropsType,
  DimensionPropsType,
  FlexPropsType,
  OpacityPropsType,
  OverflowPropsType,
  SpacingPropsType,
  TextPropsType,
  VariantPropsType,
  ZIndexPropsType,
} from '../../types';

export interface TextProps
  extends RNTextProps,
    SpacingPropsType,
    BorderRadiusPropsType,
    BorderPropsType,
    TextPropsType,
    DimensionPropsType,
    OverflowPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    Partial<Pick<BackgroundPropsType, 'bg'>>,
    Partial<Pick<FlexPropsType, 'flex'>>,
    VariantPropsType {}
