import { ViewProps as RNViewProps } from 'react-native';

import {
  BackgroundPropsType,
  BorderPropsType,
  BorderRadiusPropsType,
  DimensionPropsType,
  FlexPropsType,
  PositionPropsType,
  ShadowPropsType,
  SpacingPropsType,
  VariantPropsType,
} from '../../types';
import { Option } from './select.option.component';

export interface CompoundedSelect
  extends React.ForwardRefExoticComponent<
    SelectProps & React.RefAttributes<SelectRef>
  > {
  Option: typeof Option;
}

export type SelectRef = {
  open: () => void;
  close: () => void;
};

export interface SelectProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    BorderRadiusPropsType,
    ShadowPropsType,
    BackgroundPropsType,
    FlexPropsType,
    PositionPropsType,
    DimensionPropsType,
    VariantPropsType {
  title?: string | React.ReactNode;
  message?: string | React.ReactNode;
  submitText?: string;
  showScrollIndicator?: boolean;
  isMultiple?: boolean;
  value: any;
  onSelect?: (value: any) => void;
  submit?: boolean;
  data: any[];
  renderItem: (item: any, index: number) => React.ReactElement;
  keyExtractor?: (item: any, index: number) => string;
  renderSubmitButton?: () => React.ReactElement;
}
