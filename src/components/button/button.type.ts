import { PressableProps as RNButtonProps } from 'react-native';
import {
  ButtonPropsType,
  DimensionPropsType,
  DisabledPropsType,
  FlexPropsType,
  LoadingPropsType,
  OpacityPropsType,
  PositionPropsType,
  PrefixSuffixPropsType,
  TextPropsType,
  ZIndexPropsType,
  BackgroundPropsType,
  BorderPropsType,
  SpacingPropsType,
  BorderRadiusPropsType,
  ShadowPropsType,
  VariantPropsType,
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
