interface ButtonStates {
  isLoading?: boolean;
  isDisabled?: boolean;
}

export interface ButtonOptions extends ButtonStates {
  /**
   * Wether the button should take full width
   * @default false
   */
  full?: boolean;

  loadingText?: string;

  loaderColor?: string;
}
