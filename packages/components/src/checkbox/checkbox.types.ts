export interface CheckboxStates {
  isChecked?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export interface CheckboxOptions {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  isLoading?: boolean;
  isChecked?: boolean;
  defaultChecked?: boolean;
  colorScheme?: string;
  onChange?: (value?: string | number) => void;
  icon?: React.ReactNode;
  children?:
    | ((states: CheckboxStates) => React.ReactNode)
    | React.ReactNode
    | string;
  value?: string | number;
}

export interface CheckboxGroupOptions {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  colorScheme?: string;
  onChange?: (value?: (string | number)[]) => void;
  value?: (string | number)[];
  defaultValue?: (string | number)[];
  children: ((states: CheckboxStates) => React.ReactNode) | React.ReactNode;
}
