import { Fragment, cloneElement, useMemo } from 'react';

import { getValidChildren } from '@chakra-ui/utils';
import { SystemProps } from '@ficus-ui/style-system';

import { type NativeFicusProps, ficus, forwardRef } from '../system';
import { getDividerStyles } from './stack.utils';

interface StackOptions {
  /**
   * The space between each stack item
   * @type SystemProps["margin"]
   * @default "8px"
   */
  spacing?: SystemProps['m'];
  /**
   * If `true`, each stack item will show a divider
   * @type React.ReactElement
   */
  divider?: React.ReactElement;
}

export interface StackProps extends NativeFicusProps<'View'>, StackOptions {}

/**
 * Stacks help you easily create flexible and automatically distributed layouts
 *
 * You can stack elements in the horizontal or vertical direction,
 * and apply a space or/and divider between each element.
 *
 */
export const Stack = forwardRef<StackProps, 'View'>((props, ref) => {
  const {
    direction: flexDirection,
    children,
    divider,
    spacing,
    ...rest
  } = props;

  const direction = flexDirection ?? 'column';
  const dividerStyle = useMemo(
    () => getDividerStyles({ spacing, direction }),
    [spacing, direction]
  );

  const hasDivider = !!divider;
  const shouldUseChildren = !hasDivider;

  const clones = useMemo(() => {
    const validChildren = getValidChildren(children);
    return shouldUseChildren
      ? validChildren
      : validChildren.map((child, index) => {
          const key = typeof child.key !== 'undefined' ? child.key : index;
          const isLast = index + 1 === validChildren.length;
          const _child = child;

          if (!hasDivider) return _child;

          const clonedDivider = cloneElement(
            divider as React.ReactElement<any>,
            {
              __style: dividerStyle,
            }
          );

          const _divider = isLast ? null : clonedDivider;

          return (
            <Fragment key={key}>
              {_child}
              {_divider}
            </Fragment>
          );
        });
  }, [divider, dividerStyle, hasDivider, shouldUseChildren, children]);

  return (
    <ficus.View
      ref={ref}
      display="flex"
      gap={hasDivider ? undefined : spacing}
      {...rest}
    >
      {clones}
    </ficus.View>
  );
});
