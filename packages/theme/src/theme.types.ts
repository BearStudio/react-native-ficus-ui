import type { SystemStyleObject, ThemingProps } from '@ficus-ui/style-system';

type Dict<T = any> = Record<string, T>;

export type RecursiveProperty<T = string | number> = RecursiveObject<T> | T;

export interface RecursiveObject<T = string | number> {
  [property: string]: RecursiveProperty<T>;
}

export interface ColorHues {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

export type Colors = RecursiveObject<Dict<Partial<ColorHues>> | string>;

export interface ComponentDefaultProps extends ThemingProps, Dict {}

export interface ComponentStyleConfig {
  baseStyle?: SystemStyleObject;
  sizes?: Dict<SystemStyleObject>;
  variants?: Dict<SystemStyleObject>;
  defaultProps?: any;
}

export interface ThemeComponents {
  [componentName: string]: ComponentStyleConfig;
}

interface Typography {
  fontSizes?: RecursiveObject;
  // FIXME
  fonts?: {
    fontWeights?: RecursiveObject;
  } & RecursiveObject;
}

interface Foundations extends Typography {
  borders?: RecursiveObject;
  breakpoints?: Dict;
  colors?: Colors;
  radius?: RecursiveObject;
  shadows?: RecursiveObject;
  space?: RecursiveObject;
}

export interface FicusTheme extends Foundations {
  components?: ThemeComponents;
}
