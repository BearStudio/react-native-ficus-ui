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
  colorScheme?: string;
};

export type StyleConfig = {
  baseStyle?: SystemStyleInterpolation;
  sizes?: { [size: string]: SystemStyleInterpolation };
  variants?: { [variant: string]: SystemStyleInterpolation };
  defaultProps?: DefaultProps;
};

export function defineStyleConfig<
  BaseStyle extends SystemStyleInterpolation,
  Sizes extends Dict<SystemStyleInterpolation>,
  Variants extends Dict<SystemStyleInterpolation>,
>(config: {
  baseStyle?: BaseStyle;
  sizes?: Sizes;
  variants?: Variants;
  defaultProps?: {
    size?: keyof Sizes;
    variant?: keyof Variants;
    colorScheme?: string;
  };
}) {
  return config;
}

// ------------------------------------------------------------------ //

type Anatomy = string[];

export type PartsStyleObject<Parts extends Anatomy = Anatomy> = Partial<
  Record<Parts[number], SystemStyleObject>
>;

export type PartsStyleFunction<Parts extends Anatomy = Anatomy> = (
  props: StyleFunctionProps
) => PartsStyleObject<Parts>;

export type PartsStyleInterpolation<Parts extends Anatomy = Anatomy> =
  | PartsStyleObject<Parts>
  | PartsStyleFunction<Parts>;

export interface MultiStyleConfig<Parts extends Anatomy = Anatomy> {
  parts: Parts['keys'];
  baseStyle?: PartsStyleInterpolation<Parts>;
  sizes?: { [size: string]: PartsStyleInterpolation<Parts> };
  variants?: { [variant: string]: PartsStyleInterpolation<Parts> };
  defaultProps?: DefaultProps;
}

// ------------------------------------------------------------------ //

/**
 * Returns an object of helpers that can be used to define
 * the style configuration for a multi-part component.
 */
export function createMultiStyleConfigHelpers<Part extends string>(
  parts: Part[] | Readonly<Part[]>
) {
  return {
    definePartsStyle<PartStyles extends PartsStyleInterpolation<Part[]>>(
      config: PartStyles
    ) {
      return config;
    },
    defineMultiStyleConfig<
      BaseStyle extends PartsStyleInterpolation<Part[]>,
      Sizes extends Dict<PartsStyleInterpolation<Part[]>>,
      Variants extends Dict<PartsStyleInterpolation<Part[]>>,
    >(config: {
      baseStyle?: BaseStyle;
      sizes?: Sizes;
      variants?: Variants;
      defaultProps?: {
        size?: keyof Sizes;
        variant?: keyof Variants;
        colorScheme?: string;
      };
    }) {
      return { parts: parts as Part[], ...config };
    },
  };
}
