import { useMemo } from 'react';

import { CheckboxProps } from '.';
import { SystemStyleObject } from '../../style-system';
import { getStateStyles } from '../system/get-state-styles';

/**
 * Custom hook for managing checkbox behavior and styles.
 */
export function useCheckbox(
  props: CheckboxProps,
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

  const iconStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled,
          checked: isChecked,
        },
        styles.icon || {}
      ),
    [isDisabled, isChecked]
  );

  return {
    containerStyles,
    controlStyles,
    labelStyles,
    iconStyles,
  };
}
