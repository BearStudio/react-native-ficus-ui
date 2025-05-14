export interface CheckboxStates {
  isChecked?: boolean;
  isDisabled?: boolean;
}

export interface CheckboxOptions {
  isDisabled?: boolean;
  isChecked?: boolean;
  defaultChecked?: boolean;
  onChange?: (value?: string | number) => void;
  icon?: React.ReactNode;
  children?:
    | ((states: CheckboxStates) => React.ReactNode)
    | React.ReactNode
    | string;
  value?: string | number;
}

export interface CheckboxGroupOptions {
  isDisabled?: boolean;
  onChange?: (value?: (string | number)[]) => void;
  value?: (string | number)[];
  defaultValue?: (string | number)[];
  children: ((states: CheckboxStates) => React.ReactNode) | React.ReactNode;
}
