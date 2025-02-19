import { PressableProps as RNButtonProps } from 'react-native';

import {
  BackgroundPropsType,
  BorderPropsType,
  BorderRadiusPropsType,
  ButtonPropsType,
  DimensionPropsType,
  DisabledPropsType,
  FlexPropsType,
  LoadingPropsType,
  OpacityPropsType,
  PositionPropsType,
  PrefixSuffixPropsType,
  ShadowPropsType,
  SpacingPropsType,
  TextPropsType,
  VariantPropsType,
  ZIndexPropsType,
} from '../../types';

export interface ButtonProps
  extends RNButtonProps,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    BorderRadiusPropsType,
    DimensionPropsType,
    PositionPropsType,
    FlexPropsType,
    LoadingPropsType,
    PrefixSuffixPropsType,
    DisabledPropsType,
    TextPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    ButtonPropsType,
    Pick<BackgroundPropsType, 'bg'>,
    VariantPropsType {
  isRound?: boolean;
}
