import { createElement, forwardRef } from 'react';

import { assignAfter, compact, runIfFn, splitProps } from '@chakra-ui/utils';
import {
  StyleProps,
  SystemStyleObject,
  isStyleProp,
  styleSheet,
} from '@ficus-ui/style-system';
import { useTheme } from '@ficus-ui/theme';
import type { StyleProp } from 'react-native';

import { BaseRNElements } from './base-elements';
import type {
  AsProps,
  FicusComponent,
  FicusProps,
  PropsOf,
} from './system.types';
import { RNElementType, getComponent } from './system.utils';

type Dict<T = any> = Record<string, T>;

type GetStyleObject = (options: { baseStyle?: SystemStyleObject }) => (
  propsWithTheme: {
    theme: Dict;
    style: StyleProp<any>;
  } & Dict
) => StyleProp<any>;

export const toStyleSheetObject: GetStyleObject =
  ({ baseStyle }) =>
  (props) => {
    const { theme, style, __styles, ...styleProps } = props;

    const finalBaseStyle = runIfFn(baseStyle, props);
    const finalStyles = assignAfter(
      {},
      __styles,
      finalBaseStyle,
      compact(styleProps),
      style
    );

    return styleSheet(finalStyles)(theme);
  };

export interface FicusStyledOptions extends Dict {
  label?: string;
  baseStyle?: SystemStyleObject; // Base styles applied to the component.
}

export function styled<
  T extends React.ComponentType<any> | RNElementType,
  P extends object = {},
>(component: T, options?: FicusStyledOptions) {
  const { baseStyle } = options ?? {};
  const styleObject = toStyleSheetObject({ baseStyle });

  const Component = getComponent(component);

  const ficusComponent = forwardRef<any, any>(
    function FicusComponent(props, ref) {
      const { children, style, as, ...rest } = props;
      const { theme } = useTheme();

      const restProps = splitProps(rest, isStyleProp)[1];

      const AsComponent = as ? getComponent(as) : Component;

      const propsWithTheme = {
        style,
        theme,
        ...rest,
      };

      const computedStyle = styleObject(propsWithTheme);

      return createElement(
        AsComponent,
        {
          ref,
          style: computedStyle,
          ...restProps,
        },
        children
      );
    }
  );

  return ficusComponent as FicusComponent<T, P>;
}

export type NativeFicusComponents = {
  [Tag in BaseRNElements]: FicusComponent<Tag, {}>;
};

export type NativeFicusProps<T extends RNElementType> = Omit<
  PropsOf<T>,
  'ref' | keyof StyleProps
> &
  FicusProps<T> &
  AsProps;
