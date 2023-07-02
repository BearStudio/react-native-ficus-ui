import type { TextProps } from 'src/components/text/text.type';
import type { ThemeProps, VariantType } from '../types';

export interface ColorHues {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }

export interface ThemeType {
    components?: {
        Text?: VariantType<TextProps>;
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
