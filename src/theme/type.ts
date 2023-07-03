import type { TextProps } from 'src/components/text/text.type';
import type { ThemeProps, VariantType } from '../types';
import type { BoxProps } from 'src/components/box/box.type';

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
}

export interface ThemeType {
  components?: {
    Text?: VariantType<TextProps>;
    Box?: VariantType<BoxProps>;
  };

  fontFamily?: {
    normal?: string;
    bold?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  };

  colors?: ThemeProps<string | ColorHues>;
  fontSize?: ThemeProps<number>;
  borderRadius?: { none: 0; full: 99999 } & ThemeProps<number>;
  spacing?: { none: 0 } & ThemeProps<number>;
  shadowColor?: string;
  shadow?: ThemeProps<{
    shadowOffset?: {
      width: number;
      height: number;
    };
    shadowOpacity?: number;
    shadowRadius?: number;
    elevation?: number;
  }>;
  name?: string;
}
