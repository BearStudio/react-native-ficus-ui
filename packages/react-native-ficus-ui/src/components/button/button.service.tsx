import React, { ReactNode, useMemo } from 'react';

import { isFunction, splitProps } from '@chakra-ui/utils';

import { ButtonProps } from '.';
import { useColorMode } from '../../hooks';
import {
  Dict,
  SystemStyleObject,
  expandResponsive,
  isTextProp,
} from '../../style-system';
import { getColor, useTheme } from '../../theme';
import { ficus } from '../system';
import { getStateStyles } from '../system/get-state-styles';

/**
 * Determines if the given React node is a plain text or number.
 */
const isTextNode = (node: any): boolean =>
  typeof node === 'string' || typeof node === 'number';

function applyColorToChild(
  child: React.ReactNode,
  styles: Dict
): React.ReactNode {
  if (!React.isValidElement(child)) return child;

  // If it's a primitive element like <Icon />, inject color or styles
  const childProps = {
    ...(child.props || {}),
    color: child.props?.color || styles?.color,
  };

  return React.cloneElement(child, childProps);
}

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

    if (React.isValidElement(child)) {
      return (
        <React.Fragment key={key}>
          {applyColorToChild(child, textStyles || {})}
        </React.Fragment>
      );
    }

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

  const { colorMode } = useColorMode();

  // Compute styles based on state
  const stateStyles = useMemo(
    () =>
      getStateStyles(
        {
          disabled: isDisabled || isLoading,
        },
        styles,
        colorMode
      ),
    [isDisabled, isLoading, styles, colorMode]
  );

  const [textStyles] = splitProps(stateStyles, isTextProp);

  const responsiveFull = expandResponsive({ full })(theme);

  // Memoized button styles
  const buttonStyles = useMemo<SystemStyleObject>(
    () => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: responsiveFull?.full ? '100%' : undefined,
      ...stateStyles,
    }),
    [responsiveFull?.full, stateStyles]
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
          return children({
            pressed: false,
          });
        }

        return children;
      }

      return splitChildren(children, textStyles, id) as ReactNode;
    },
  };
}
