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
} from 'types';

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
    Pick<BackgroundPropsType, 'bg'>,
    Pick<FlexPropsType, 'flex'>,
    VariantPropsType {}
