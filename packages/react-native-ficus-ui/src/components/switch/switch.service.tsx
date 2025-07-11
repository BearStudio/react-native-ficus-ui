import { useMemo } from 'react';

import { SwitchProps } from '.';
import { useColorMode } from '../../hooks';
import { SystemStyleObject } from '../../style-system';
import { getStateStyles } from '../system/get-state-styles';

/**
 * Custom hook for managing switch behavior and styles.
 */
export function useSwitch(
  props: SwitchProps,
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

  const trackStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled,
          checked: isChecked,
        },
        styles.track || {},
        colorMode
      ),
    [isDisabled, isChecked, colorMode]
  );

  const thumbStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled,
          checked: isChecked,
        },
        styles.thumb || {},
        colorMode
      ),
    [isDisabled, isChecked, colorMode]
  );

  return {
    containerStyles,
    trackStyles,
    thumbStyles,
  };
}
