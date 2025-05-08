export interface RadioStates {
  isChecked?: boolean;
  isDisabled?: boolean;
}

export interface RadioOptions {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  isChecked?: boolean;
  defaultChecked?: boolean;
  colorScheme?: string;
  onChange?: (value?: string | number) => void;
  children?:
    | ((states: RadioStates) => React.ReactNode)
    | React.ReactNode
    | string;
  value?: string | number;
}

export interface RadioGroupOptions {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  colorScheme?: string;
  onChange?: (value?: string | number) => void;
  value?: string | number;
  defaultValue?: string | number;
  children: ((states: RadioStates) => React.ReactNode) | React.ReactNode;
}
