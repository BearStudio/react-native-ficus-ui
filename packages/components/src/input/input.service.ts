import { useMemo } from 'react';

import { Dict } from '@chakra-ui/utils';
import { SystemStyleObject } from '@ficus-ui/style-system';
import { getColor, useTheme } from '@ficus-ui/theme';

import { InputProps } from '.';
import { getStateStyles } from '../system/get-state-styles';

/**
 * Custom hook for managing input behavior and styles.
 */
export function useInput(
  props: InputProps,
  styles: SystemStyleObject,
  isFocused: boolean
) {
  const { isDisabled, isLoading, loaderColor } = props;

  const { theme } = useTheme();

  // Compute styles based on state
  const stateStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled || isLoading,
          focused: isFocused,
        },
        styles
      ),
    [isDisabled, isLoading, isFocused, styles]
  );

  const inputContainerStyles = useMemo(
    () => ({
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 0,
      ...stateStyles,
    }),
    [stateStyles]
  );

  const inputContainerMarginStyles = useMemo(
    () => ({
      padding: isFocused
        ? 0
        : (styles as Dict)._focused?.borderWidth -
          (styles as Dict)?.borderWidth,
    }),
    [styles, isFocused]
  );

  const inputStyles = useMemo(
    () => ({
      flex: 1,
      borderWidth: 0,
      margin: 0,
    }),
    []
  );

  const prefixStyles = useMemo(
    () => ({
      marginRight: 5,
    }),
    []
  );

  const suffixStyles = useMemo(
    () => ({
      marginLeft: 5,
    }),
    []
  );

  const resolvedColor = getColor(
    inputContainerStyles?.borderColor,
    theme.colors
  );

  // Memoized spinner styles
  const spinnerStyles = useMemo(
    () =>
      ({
        position: 'absolute',
        spacing: 8,
        loaderColor: loaderColor || resolvedColor,
      }) as const,
    [loaderColor]
  );

  return {
    inputContainerStyles,
    inputContainerMarginStyles,
    inputStyles,
    spinnerStyles,
    prefixStyles,
    suffixStyles,
  };
}
