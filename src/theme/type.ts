import type { TextProps } from 'components/text/text.type';
import type { ThemeProps, VariantType } from '../types';
import type { BoxProps } from 'components/box/box.type';
import type { StackProps } from 'components/stack/stack.type';
import type { FlexProps } from 'components/flex/flex.type';
import type { CenterProps } from 'components/center/center.type';
import type { ScrollBoxProps } from 'components/scrollbox/scrollbox.type';

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
    Flex?: VariantType<FlexProps>;
    Center?: VariantType<CenterProps>;
    ScrollBox?: VariantType<ScrollBoxProps>;
    Stack?: VariantType<StackProps>;
    HStack?: VariantType<StackProps>;
    VStack?: VariantType<StackProps>;
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
  stackSpacing?: { none: 0 } & ThemeProps<number>;
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
