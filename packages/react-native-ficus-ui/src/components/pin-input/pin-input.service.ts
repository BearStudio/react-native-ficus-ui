import { useMemo } from 'react';

import { PinInputProps } from '.';
import { useColorMode } from '../../hooks';
import { SystemStyleObject } from '../../style-system';
import { getStateStyles } from '../system/get-state-styles';
import { PinInputFieldProps } from './pin-input-field';

/**
 * Custom hook for managing pin input behavior and styles.
 */
export function usePinInput(props: PinInputProps, styles: SystemStyleObject) {
  const { isDisabled } = props;

  const { colorMode } = useColorMode();

  // Compute styles based on state
  const stateStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled,
        },
        styles,
        colorMode
      ),
    [isDisabled, styles, colorMode]
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

  const { colorMode } = useColorMode();

  // Compute styles based on state
  const stateStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled,
          focused: isFocused,
        },
        styles,
        colorMode
      ),
    [isDisabled, isFocused, styles, colorMode]
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
