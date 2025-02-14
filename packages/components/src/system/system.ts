import { createElement, forwardRef } from 'react';

import { assignAfter, compact, splitProps } from '@chakra-ui/utils';
import {
  StyleProps,
  SystemStyleObject,
  isStyleProp,
  styleSheet,
} from '@ficus-ui/style-system';
import { useTheme } from '@ficus-ui/theme';

import type {
  AsProps,
  FicusComponent,
  FicusProps,
  PropsOf,
} from './system.types';
import { NativeElements, RNBaseElements } from './system.utils';

type Dict<T = any> = Record<string, T>;

interface GetStyleObject {
  (options: { baseStyle?: SystemStyleObject }): any;
}
export const toStyleSheetObject: GetStyleObject =
  ({ baseStyle }) =>
  (props: any) => {
    const { theme, style, ...restProps } = props;
    const styleProps = splitProps(restProps, isStyleProp)[0] ?? {};

    // We always want `style` to override styles by custom props
    const finalStyles = assignAfter({}, baseStyle, compact(styleProps), style);

    return styleSheet(finalStyles)(theme);
  };

export interface FicusStyledOptions extends Dict {
  label?: string;
  baseStyle?: SystemStyleObject;
}

export function styled<T extends NativeElements, P extends object = {}>(
  component: T,
  options?: FicusStyledOptions
) {
  const { baseStyle } = options ?? {};
  const styleObject = toStyleSheetObject({ baseStyle });

  const Component = RNBaseElements[component];

  const ficusComponent = forwardRef<any, any>(
    function FicusComponent(props, ref) {
      const { children, style, ...rest } = props;

      const { theme, windowWidth } = useTheme();
      const propsWithTheme = {
        style,
        theme: {
          ...theme,
          __windowWidth: windowWidth,
        },
        ...rest,
      };

      const computedStyle = styleObject(propsWithTheme);

      return createElement(
        Component,
        {
          ref,
          style: {
            ...computedStyle,
            // borderRadius: 6,
          },
          ...rest,
        },
        children
      );
    }
  );

  return ficusComponent as FicusComponent<T, P>;
}

export type NativeFicusComponents = {
  [Tag in NativeElements]: FicusComponent<Tag, {}>;
};

export type NativeFicusProps<T extends NativeElements> = Omit<
  PropsOf<T>,
  'ref' | keyof StyleProps
> &
  FicusProps &
  AsProps;
