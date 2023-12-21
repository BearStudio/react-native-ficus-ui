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
import { CheckboxGroup, BoxProps } from '@/components';

export type CompundedCheckbox<P> = React.FunctionComponent<P> & {
  Group: typeof CheckboxGroup;
};

export interface CheckboxProps
  extends Omit<RNButtonProps, 'children'>,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    BorderRadiusPropsType,
    DimensionPropsType,
    PositionPropsType,
    FlexPropsType,
    PrefixSuffixPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    DisabledPropsType,
    Pick<TextPropsType, 'fontWeight' | 'color'>,
    Pick<BackgroundPropsType, 'bg'>,
    ButtonPropsType,
    VariantPropsType {
  colorScheme?: string;
  defaultChecked?: boolean;
  icon?: string | React.ReactNode;
  iconColor?: string;
  isChecked?: boolean;
  isLoading?: boolean;
  onChecked?: (newValue: boolean) => void;
  onChange?: (value: any) => void;
  value?: any;
  children?:
    | ((states: CheckboxStates) => React.ReactNode)
    | React.ReactNode
    | string;
  size?: number | 'sm' | 'lg';
}

export interface CheckboxGroupProps extends BoxProps {
  onChange?: (value: any[]) => void;
  value?: any[];
  defaultValue?: any[];
  children: React.ReactElement[] | React.ReactElement;
  colorScheme?: string;
}

export interface CheckboxStates {
  isChecked?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}
