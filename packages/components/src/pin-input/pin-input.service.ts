import { useMemo } from 'react';

import { SystemStyleObject } from 'react-native-ficus-ui/style-system';

import { PinInputProps } from '.';
import { getStateStyles } from '../system/get-state-styles';
import { PinInputFieldProps } from './pin-input-field';

/**
 * Custom hook for managing pin input behavior and styles.
 */
export function usePinInput(props: PinInputProps, styles: SystemStyleObject) {
  const { isDisabled } = props;

  // Compute styles based on state
  const stateStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled,
        },
        styles
      ),
    [isDisabled, styles]
  );

  const pinInputStyles = useMemo(
    () => ({
      ...stateStyles,
    }),
    [stateStyles]
  );

  return {
    pinInputStyles,
  };
}

/**
 * Custom hook for managing pin input field behavior and styles.
 */
export function usePinInputField(
  props: PinInputFieldProps,
  styles: SystemStyleObject
) {
  const { isDisabled, isFocused } = props;

  // Compute styles based on state
  const stateStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled,
          focused: isFocused,
        },
        styles
      ),
    [isDisabled, isFocused, styles]
  );

  const pinInputFieldStyles = useMemo(
    () => ({
      ...stateStyles,
    }),
    [stateStyles]
  );

  return {
    pinInputFieldStyles,
  };
}
