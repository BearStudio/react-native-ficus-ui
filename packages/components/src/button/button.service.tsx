import React, { ReactNode, useMemo } from 'react';

import { isFunction, splitProps } from '@chakra-ui/utils';
import { Dict, SystemStyleObject, isTextProp } from '@ficus-ui/style-system';

import { ButtonProps } from '.';
import { ficus } from '../system';
import { getStateStyles } from '../system/get-state-styles';
import { getColor, useTheme } from '@ficus-ui/theme';

/**
 * Determines if the given React node is a plain text or number.
 */
const isTextNode = (node: any): boolean =>
  typeof node === 'string' || typeof node === 'number';

/**
 * Splits children into an array, wrapping text children in `ficus.Text` with applied styles.
 */
export function splitChildren(
  children: React.ReactNode,
  textStyles: Dict | undefined,
  buttonId?: string
): React.ReactNode {
  return React.Children.map(children, (child, index) => {
    const key = `${buttonId || 'button'}-${index}`;

    if (isTextNode(child))
      return (
        <ficus.Text key={key} __styles={textStyles}>
          {child}
        </ficus.Text>
      );

    return <React.Fragment key={key}>{child}</React.Fragment>;
  });
}

/**
 * Custom hook for managing button behavior and styles.
 */
export function useButton(props: ButtonProps, styles: SystemStyleObject) {
  const {
    id,
    full,
    isDisabled,
    isLoading,
    children,
    loadingText,
    loaderColor,
  } = props;

  const { theme } = useTheme();
  
  // Compute styles based on state
  const stateStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled || isLoading,
        },
        styles
      ),
    [isDisabled, isLoading, styles]
  );

  const [textStyles] = splitProps(stateStyles, isTextProp);

  // Memoized button styles
  const buttonStyles = useMemo<SystemStyleObject>(
    () => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: full ? '100%' : undefined,
      ...stateStyles,
    }),
    [full, stateStyles]
  );

  const resolvedColor = getColor(textStyles?.color, theme.colors);

  // Memoized spinner styles
  const spinnerStyles = useMemo(
    () =>
      ({
        position: loadingText ? 'relative' : 'absolute',
        spacing: 8,
        loaderColor: loaderColor || resolvedColor,
      }) as const,
    [loadingText, loaderColor]
  );

  return {
    buttonStyles,
    spinnerStyles,
    textStyles,
    loadingText: loadingText && (
      <ficus.Text __styles={textStyles}>{loadingText}</ficus.Text>
    ),
    /**
     * Retrieves the processed button children.
     */
    getChildren() {
      if (isFunction(children)) {
        if (isLoading) {
          /**
           * To be able to render it inside of the invisible View when loading
           */
          return children({ pressed: false });
        }

        return children;
      }

      return splitChildren(children, textStyles, id) as ReactNode;
    },
  };
}
