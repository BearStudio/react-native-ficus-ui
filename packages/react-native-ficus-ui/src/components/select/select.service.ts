import { useMemo } from 'react';

import { useColorMode } from '../../hooks';
import { SystemStyleObject } from '../../style-system';
import { getStateStyles } from '../system/get-state-styles';

/**
 * Custom hook for managing select behavior and styles.
 */
export function useSelect(styles: SystemStyleObject, isFocused: boolean) {
  const { colorMode } = useColorMode();

  // Compute styles based on state
  const stateStyles = useMemo(
    () =>
      getStateStyles(
        {
          focused: isFocused,
        },
        styles,
        colorMode
      ),
    [isFocused, styles, colorMode]
  );

  const selectStyles = useMemo(
    () => ({
      ...stateStyles,
    }),
    [stateStyles]
  );

  return {
    selectStyles,
  };
}
