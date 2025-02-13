import type { SliderProps as RNSliderProps } from '@react-native-community/slider';
import type { ViewProps as RNViewProps } from 'react-native';

import type {
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  OpacityPropsType,
  PositionPropsType,
  SpacingPropsType,
  VariantPropsType,
  ZIndexPropsType,
} from '../../types';

export interface SliderProps
  extends RNViewProps,
    RNSliderProps,
    SpacingPropsType,
    DimensionPropsType,
    BackgroundPropsType,
    FlexPropsType,
    PositionPropsType,
    ZIndexPropsType,
    OpacityPropsType,
    VariantPropsType {
  min?: number;
  max?: number;
  defaultValue?: number;
  filledTrackColor?: string;
  colorScheme?: string;
}
