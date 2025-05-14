export interface RadioGroupStates {
  isDisabled?: boolean;
}

type RadioGroupValue = string | number;
export interface RadioGroupOptions extends RadioGroupStates {
  onChange?: (value?: RadioGroupValue) => void;
  value?: RadioGroupValue;
  defaultValue?: RadioGroupValue;
  children: ((states: RadioStates) => React.ReactNode) | React.ReactNode;
}

export interface RadioStates extends RadioGroupStates {
  isChecked?: boolean;
}
export interface RadioOptions extends RadioStates {
  defaultChecked?: boolean;
  onChange?: (value?: RadioGroupValue) => void;
  children?:
    | ((states: RadioStates) => React.ReactNode)
    | React.ReactNode
    | string;
  value?: RadioGroupValue;
}
