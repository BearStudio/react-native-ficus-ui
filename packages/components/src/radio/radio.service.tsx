import { useMemo } from 'react';

import { SystemStyleObject } from 'react-native-ficus-ui/style-system';

import { RadioProps } from '.';
import { getStateStyles } from '../system/get-state-styles';

/**
 * Custom hook for managing radio behavior and styles.
 */
export function useRadio(
  props: RadioProps,
  styles: Record<string, SystemStyleObject>
) {
  const { isDisabled, isChecked } = props;

  const containerStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled,
          checked: isChecked,
        },
        styles.container || {}
      ),
    [isDisabled, isChecked]
  );

  const controlStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled,
          checked: isChecked,
        },
        styles.control || {}
      ),
    [isDisabled, isChecked]
  );

  const labelStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled,
          checked: isChecked,
        },
        styles.label || {}
      ),
    [isDisabled, isChecked]
  );

  return {
    containerStyles,
    controlStyles,
    labelStyles,
  };
}
