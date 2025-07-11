import { useMemo } from 'react';

import { RadioProps } from '.';
import { useColorMode } from '../../hooks';
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

  return {
    containerStyles,
    controlStyles,
    labelStyles,
  };
}
