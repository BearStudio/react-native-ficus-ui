import { useMemo } from 'react';

import { SystemStyleObject } from '@ficus-ui/style-system';

import { getStateStyles } from '../system/get-state-styles';

/**
 * Custom hook for managing select behavior and styles.
 */
export function useSelect(styles: SystemStyleObject, isFocused: boolean) {
  // Compute styles based on state
  const stateStyles = useMemo(
    () =>
      getStateStyles(
        {
          focused: isFocused,
        },
        styles
      ),
    [isFocused, styles]
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
