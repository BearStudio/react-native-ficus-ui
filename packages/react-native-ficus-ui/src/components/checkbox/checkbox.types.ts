import { GestureResponderEvent } from 'react-native';

export interface CheckboxGroupStates {
  isDisabled?: boolean;
}

type CheckboxValue = string | number;
export interface CheckboxGroupOptions extends CheckboxGroupStates {
  onChange?: (value?: CheckboxValue[]) => void;
  value?: CheckboxValue[];
  defaultValue?: CheckboxValue[];
  children: ((states: CheckboxStates) => React.ReactNode) | React.ReactNode;
}

export interface CheckboxStates extends CheckboxGroupStates {
  isChecked?: boolean;
  onToggle?: (event: GestureResponderEvent) => void;
}

export interface CheckboxOptions extends CheckboxStates {
  defaultChecked?: boolean;
  onChange?: (value?: CheckboxValue) => void;
  icon?: React.ReactNode;
  children?:
    | ((states: CheckboxStates) => React.ReactNode)
    | React.ReactNode
    | string;
  value?: CheckboxValue;
}
