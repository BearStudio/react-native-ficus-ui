export interface SwitchStates {
  isDisabled?: boolean;
  isChecked?: boolean;
}

export interface SwitchOptions extends SwitchStates {
  duration?: number;
}
