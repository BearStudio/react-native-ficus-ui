import { Fragment, cloneElement, useMemo } from 'react';

import { getValidChildren } from '@chakra-ui/utils';
import { SystemProps } from '@ficus-ui/style-system';

import { type NativeFicusProps, ficus, forwardRef } from '../system';
import { StackItem } from './stack-item.component';
import { getDividerStyles } from './stack.utils';

interface StackOptions {
  /**
   * Shorthand for `alignItems` style prop
   * @type SystemProps["alignItems"]
   */
  align?: SystemProps['alignItems'];
  /**
   * Shorthand for `justifyContent` style prop
   * @type SystemProps["justifyContent"]
   */
  justify?: SystemProps['justifyContent'];
  /**
   * Shorthand for `flexWrap` style prop
   * @type SystemProps["flexWrap"]
   */
  wrap?: SystemProps['flexWrap'];
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
  /**
   * If `true`, the children will be wrapped in a `Box`
   *
   * @default false
   */
  shouldWrapChildren?: boolean;
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
    align,
    justify,
    spacing = 8,
    wrap,
    children,
    divider,
    shouldWrapChildren,
    ...rest
  } = props;

  const direction = flexDirection ?? 'column';

  const dividerStyle = useMemo(
    () => getDividerStyles({ spacing, direction }),
    [spacing, direction]
  );

  const hasDivider = !!divider;
  const shouldUseChildren = !shouldWrapChildren && !hasDivider;

  const clones = useMemo(() => {
    const validChildren = getValidChildren(children);
    return shouldUseChildren
      ? validChildren
      : validChildren.map((child, index) => {
          const key = typeof child.key !== 'undefined' ? child.key : index;
          const isLast = index + 1 === validChildren.length;
          const wrappedChild = <StackItem key={key}>{child}</StackItem>;
          const _child = shouldWrapChildren ? wrappedChild : child;

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
  }, [
    divider,
    dividerStyle,
    hasDivider,
    shouldUseChildren,
    shouldWrapChildren,
    children,
  ]);

  return (
    <ficus.View
      ref={ref}
      display="flex"
      alignItems={align}
      justifyContent={justify}
      flexDirection={direction}
      flexWrap={wrap}
      gap={hasDivider ? undefined : spacing}
      {...rest}
    >
      {clones}
    </ficus.View>
  );
});
