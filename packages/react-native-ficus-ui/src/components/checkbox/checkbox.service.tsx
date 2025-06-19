import { useMemo } from 'react';

import { CheckboxProps } from '.';
import { useColorMode } from '../../hooks';
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

  const { colorMode } = useColorMode();

  const containerStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled,
          checked: isChecked,
        },
        styles.container || {},
        colorMode
      ),
    [isDisabled, isChecked, colorMode]
  );

  const controlStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled,
          checked: isChecked,
        },
        styles.control || {},
        colorMode
      ),
    [isDisabled, isChecked, colorMode]
  );

  const labelStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled,
          checked: isChecked,
        },
        styles.label || {},
        colorMode
      ),
    [isDisabled, isChecked, colorMode]
  );

  const iconStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled,
          checked: isChecked,
        },
        styles.icon || {},
        colorMode
      ),
    [isDisabled, isChecked, colorMode]
  );

  return {
    containerStyles,
    controlStyles,
    labelStyles,
    iconStyles,
  };
}
