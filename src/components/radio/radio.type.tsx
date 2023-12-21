import * as React from 'react';
import { PressableProps as RNButtonProps } from 'react-native';
import {
  BackgroundPropsType,
  ButtonPropsType,
  DimensionPropsType,
  DisabledPropsType,
  FlexPropsType,
  OpacityPropsType,
  PositionPropsType,
  PrefixSuffixPropsType,
  TextPropsType,
  ZIndexPropsType,
  BorderPropsType,
  SpacingPropsType,
  BorderRadiusPropsType,
  ShadowPropsType,
  VariantPropsType,
} from '@/types';
import { RadioGroup, BoxProps } from '@/components';

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
    Omit<ButtonPropsType, 'underlayColor'>,
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
  isFocussed?: boolean;
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
