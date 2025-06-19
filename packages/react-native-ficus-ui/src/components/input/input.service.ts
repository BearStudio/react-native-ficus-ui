import { useMemo } from 'react';

import { Platform } from 'react-native';

import { InputProps } from '.';
import { useColorMode } from '../../hooks';
import { SystemStyleObject } from '../../style-system';
import { getColor, useTheme } from '../../theme';
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

  const { colorMode } = useColorMode();

  // Compute styles based on state
  const stateStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled || isLoading,
          focused: isFocused,
        },
        styles,
        colorMode
      ),
    [isDisabled, isLoading, isFocused, styles, colorMode]
  );

  const inputContainerStyles = useMemo(
    () => ({
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      ...stateStyles,
    }),
    [stateStyles]
  );

  const inputStyles = useMemo(
    () => ({
      flex: 1,
      borderWidth: 0,
      padding: 0,
      margin: 0,
      height: 18,
      lineHeight: 18,
      color: colorMode === 'dark' ? 'white' : 'black',
      ...(Platform.OS === 'android' ? { lineHeight: 20, fontSize: 12 } : {}),
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
    inputStyles,
    spinnerStyles,
    prefixStyles,
    suffixStyles,
  };
}
