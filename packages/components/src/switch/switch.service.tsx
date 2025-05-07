import { useMemo } from 'react';

import { SystemStyleObject } from '@ficus-ui/style-system';

import { SwitchProps } from '.';
import { getStateStyles } from '../system/get-state-styles';

/**
 * Custom hook for managing switch behavior and styles.
 */
export function useSwitch(
  props: SwitchProps,
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

  const trackStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled,
          checked: isChecked,
        },
        styles.track || {}
      ),
    [isDisabled, isChecked]
  );

  const thumbStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled,
          checked: isChecked,
        },
        styles.thumb || {}
      ),
    [isDisabled, isChecked]
  );

  return {
    containerStyles,
    trackStyles,
    thumbStyles,
  };
}
