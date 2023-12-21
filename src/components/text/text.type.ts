import type { TextProps as RNTextProps } from 'react-native';
import type {
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  OpacityPropsType,
  OverflowPropsType,
  TextPropsType,
  ZIndexPropsType,
  BorderPropsType,
  SpacingPropsType,
  BorderRadiusPropsType,
  VariantPropsType,
} from '@/types';

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
