import { useMemo } from 'react';

import { RadioProps } from '.';
import { SystemStyleObject } from '../../style-system';
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
