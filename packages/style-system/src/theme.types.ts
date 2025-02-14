const tokens = [
  /** These are part of the theme */
  'breakpoints',
  'fonts',
  'fontSizes',
  'fontWeights',
  'colors',
  'radius',
  'shadows',
  'sizes',
  'space',
  /** These are not part of the theme */
  'borderStyles',
  'borderWidths',
  'flexbox',
] as const;

export type ThemeScope = (typeof tokens)[number];

export interface ThemeTypings {
  breakpoints: string;
  fonts: string;
  fontSizes: string;
  fontWeights: string;
  colors: string;
  colorSchemes: string;
  radius: string;
  sizes: string;
  space: string;
  shadows: string;
  components: {
    [componentName: string]: {
      sizes: string;
      variants: string;
    };
  };
}
