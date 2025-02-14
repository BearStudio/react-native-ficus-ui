import { SystemStyleObject } from './system.types';
import { Dict } from './utils/types';

// ------------------------------------------------------------------ //

export function defineStyle<T extends SystemStyleObject>(styles: T) {
  return styles;
}

// ------------------------------------------------------------------ //

type DefaultProps = {
  size?: string;
  variant?: string;
  colorScheme: string;
};

export type StyleConfig = {
  baseStyle?: SystemStyleObject;
  sizes?: { [size: string]: SystemStyleObject };
  variants?: { [variant: string]: SystemStyleObject };
  defaultProps: DefaultProps;
};

export function defineStyleConfig<
  BaseStyle extends SystemStyleObject,
  Sizes extends Dict<SystemStyleObject>,
  Variants extends Dict<SystemStyleObject>,
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
