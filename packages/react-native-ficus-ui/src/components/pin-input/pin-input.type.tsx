import type { ViewProps as RNViewProps } from 'react-native';
import { CodeFieldProps } from 'react-native-confirmation-code-field';

import type {
  BackgroundPropsType,
  BorderPropsType,
  BorderRadiusPropsType,
  DimensionPropsType,
  FlexPropsType,
  InputPropsType,
  OpacityPropsType,
  OverflowPropsType,
  PositionPropsType,
  ShadowPropsType,
  SpacingPropsType,
  VariantPropsType,
  ZIndexPropsType,
} from '../../types';

export interface PinInputProps
  extends CodeFieldProps,
    RNViewProps,
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
    InputPropsType {
  colorScheme?: string;
  mask?: boolean;
  placeholder?: string;
}
