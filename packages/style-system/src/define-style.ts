import { SystemStyleObject } from './system.types';
import { Dict } from './utils/types';

export type StyleFunctionProps = {
  colorScheme: string;
  colorMode: 'light' | 'dark';
  orientation?: 'horizontal' | 'vertical';
  theme: Dict;
  [key: string]: any;
};

export type SystemStyleFunction = (
  props: StyleFunctionProps
) => SystemStyleObject;

export type SystemStyleInterpolation = SystemStyleObject | SystemStyleFunction;

// ------------------------------------------------------------------ //

export function defineStyle<T extends SystemStyleInterpolation>(styles: T) {
  return styles;
}

// ------------------------------------------------------------------ //

type DefaultProps = {
  size?: string;
  variant?: string;
  colorScheme: string;
};

export type StyleConfig = {
  baseStyle?: SystemStyleInterpolation;
  sizes?: { [size: string]: SystemStyleInterpolation };
  variants?: { [variant: string]: SystemStyleInterpolation };
  defaultProps: DefaultProps;
};

export function defineStyleConfig<
  BaseStyle extends SystemStyleInterpolation,
  Sizes extends Dict<SystemStyleInterpolation>,
  Variants extends Dict<SystemStyleInterpolation>,
>(config: {
  baseStyle?: BaseStyle;
  sizes: Sizes;
  variants: Variants;
  defaultProps?: {
    size?: keyof Sizes;
    variant?: keyof Variants;
    colorScheme?: string;
  };
}) {
  return config;
}

// ------------------------------------------------------------------ //
