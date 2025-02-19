import * as React from 'react';

import { PressableProps as RNButtonProps } from 'react-native';

import {
  BackgroundPropsType,
  BorderPropsType,
  BorderRadiusPropsType,
  ButtonPropsType,
  DimensionPropsType,
  DisabledPropsType,
  FlexPropsType,
  OpacityPropsType,
  PositionPropsType,
  PrefixSuffixPropsType,
  ShadowPropsType,
  SpacingPropsType,
  TextPropsType,
  VariantPropsType,
  ZIndexPropsType,
} from '../../types';
import { BoxProps } from '../box/box.type';
import { RadioGroup } from './group.component';

export type CompoundedRadio<P> = React.FunctionComponent<P> & {
  Group: typeof RadioGroup;
};

export interface RadioProps
  extends Omit<RNButtonProps, 'children'>,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    BorderRadiusPropsType,
    PositionPropsType,
    DimensionPropsType,
    FlexPropsType,
    DisabledPropsType,
    PrefixSuffixPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    Omit<ButtonPropsType, 'underlayColor' | 'size'>,
    Pick<BackgroundPropsType, 'bg'>,
    Pick<TextPropsType, 'fontWeight' | 'color' | 'fontSize'>,
    VariantPropsType {
  colorScheme?: string;
  defaultChecked?: boolean;
  icon?: string | React.ReactNode;
  iconColor?: string;
  isChecked?: boolean;
  isLoading?: boolean;
  onChange?: (value: any) => void;
  value?: any;
  children: ((states: RadioStates) => React.ReactNode) | React.ReactNode;
  size?: number | 'sm' | 'lg';
}

export interface RadioStates {
  isFocused?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export interface RadioGroupProps extends BoxProps {
  onChange?: (value: any) => void;
  value?: any;
  defaultValue?: any;
  children: React.ReactElement[] | React.ReactElement;
  colorScheme?: string;
}

// Backwards compatibility
export type IRadioProps = RadioProps;
