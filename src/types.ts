import React from 'react';
import { ImageSourcePropType as RNImageSourcePropType } from 'react-native';
import { ThemeType } from 'theme';

export type ResponsiveValue<T> = T | Record<string, T>;

type Undefined<T> = { [P in keyof T]: P extends undefined ? T[P] : never };

type FilterFlags<Base, Condition> = {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
};

type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base];

type SubType<Base, Condition> = Pick<Base, AllowedNames<Base, Condition>>;

export type OptionalKeys<T> = Exclude<
  keyof T,
  NonNullable<keyof SubType<Undefined<T>, never>>
>;

export type ThemeProps<T> = {
  [name: string]: T;
};

type ComponentsProps<T> = Omit<
  Pick<T, OptionalKeys<T>>,
  'children' | 'variant'
>;

export type VariantType<T> = ComponentsProps<T> & {
  variants?: {
    [name: string]: ComponentsProps<T>;
  };
};

export type DefaultProps<Props extends object> = {
  [K in keyof Props]?: Props[K];
};

export const borderProps = [
  'borderColor',
  'borderTopColor',
  'borderRightColor',
  'borderBottomColor',
  'borderLeftColor',
  'borderWidth',
  'borderTopWidth',
  'borderRightWidth',
  'borderLeftWidth',
  'borderBottomWidth',
  'borderStartWidth',
  'borderEndWidth',
  'borderStyle',
] as const;
export interface BorderPropsType {
  borderColor?: ResponsiveValue<string>;
  borderTopColor?: ResponsiveValue<string>;
  borderRightColor?: ResponsiveValue<string>;
  borderBottomColor?: ResponsiveValue<string>;
  borderLeftColor?: ResponsiveValue<string>;
  borderWidth?: ResponsiveValue<number>;
  borderTopWidth?: ResponsiveValue<number>;
  borderRightWidth?: ResponsiveValue<number>;
  borderLeftWidth?: ResponsiveValue<number>;
  borderBottomWidth?: ResponsiveValue<number>;
  borderStartWidth?: ResponsiveValue<number>;
  borderEndWidth?: ResponsiveValue<number>;
  borderStyle?: ResponsiveValue<'solid' | 'dotted' | 'dashed'>;
}

export const spacingProps = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'ms',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
  'ps',
] as const;
export interface SpacingPropsType {
  m?: ResponsiveValue<string | number>;
  mt?: ResponsiveValue<string | number>;
  mr?: ResponsiveValue<string | number>;
  mb?: ResponsiveValue<string | number>;
  ml?: ResponsiveValue<string | number>;
  mx?: ResponsiveValue<string | number>;
  my?: ResponsiveValue<string | number>;
  ms?: ResponsiveValue<string | number>;
  p?: ResponsiveValue<string | number>;
  pt?: ResponsiveValue<string | number>;
  pr?: ResponsiveValue<string | number>;
  pb?: ResponsiveValue<string | number>;
  pl?: ResponsiveValue<string | number>;
  px?: ResponsiveValue<string | number>;
  py?: ResponsiveValue<string | number>;
  ps?: ResponsiveValue<string | number>;
}

export const stackSpacingProps = ['spacing'] as const;
export interface StackSpacingPropsType {
  spacing?: ResponsiveValue<string | number>;
}

export const orientationProps = ['orientation'] as const;
export interface OrientationPropsType {
  orientation?: ResponsiveValue<'vertical' | 'horizontal'>;
}

export const borderRadiusProps = [
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderTopRadius',
  'borderLeftRadius',
  'borderRightRadius',
  'borderBottomRadius',
] as const;
export interface BorderRadiusPropsType {
  borderRadius?: ResponsiveValue<string | number>;
  borderTopLeftRadius?: ResponsiveValue<string | number>;
  borderTopRightRadius?: ResponsiveValue<string | number>;
  borderBottomLeftRadius?: ResponsiveValue<string | number>;
  borderBottomRightRadius?: ResponsiveValue<string | number>;
  borderTopRadius?: ResponsiveValue<string | number>;
  borderLeftRadius?: ResponsiveValue<string | number>;
  borderRightRadius?: ResponsiveValue<string | number>;
  borderBottomRadius?: ResponsiveValue<string | number>;
}

export const shadowProps = ['shadow', 'shadowColor'] as const;
export interface ShadowPropsType {
  shadow?: ResponsiveValue<string | number>;
  shadowColor?: ResponsiveValue<string>;
}

export const dimensionProps = [
  'minH',
  'minW',
  'maxH',
  'maxW',
  'h',
  'w',
] as const;
export interface DimensionPropsType {
  minH?: ResponsiveValue<number | string>;
  minW?: ResponsiveValue<number | string>;
  maxH?: ResponsiveValue<number | string>;
  maxW?: ResponsiveValue<number | string>;
  h?: ResponsiveValue<number | string>;
  w?: ResponsiveValue<number | string>;
}

export const flexProps = [
  'flex',
  'flexDirection',
  'direction',
  'flexWrap',
  'wrap',
  'flexGrow',
  'grow',
  'flexBasis',
  'basis',
  'flexShrink',
  'shrink',
  'justifyContent',
  'justify',
  'alignSelf',
  'alignItems',
  'align',
] as const;
export interface FlexPropsType {
  flex?: ResponsiveValue<number>;
  flexDirection?: ResponsiveValue<
    'row' | 'column' | 'row-reverse' | 'column-reverse'
  >;
  direction?: ResponsiveValue<
    'row' | 'column' | 'row-reverse' | 'column-reverse'
  >;
  flexWrap?: ResponsiveValue<'wrap' | 'nowrap' | 'wrap-reverse'>;
  wrap?: ResponsiveValue<'wrap' | 'nowrap' | 'wrap-reverse'>;
  flexBasis?: ResponsiveValue<string | number>;
  basis?: ResponsiveValue<string | number>;
  flexGrow?: ResponsiveValue<number>;
  grow?: ResponsiveValue<number>;
  flexShrink?: ResponsiveValue<number>;
  shrink?: ResponsiveValue<number>;
  justifyContent?: ResponsiveValue<
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  >;
  justify?: ResponsiveValue<
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  >;
  alignSelf?: ResponsiveValue<
    'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  >;
  alignItems?: ResponsiveValue<
    'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  >;
  align?: ResponsiveValue<
    'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  >;
}

export const positionProps = [
  'position',
  'top',
  'right',
  'bottom',
  'left',
] as const;
export interface PositionPropsType {
  position?: ResponsiveValue<'absolute' | 'relative'>;
  top?: ResponsiveValue<number>;
  right?: ResponsiveValue<number>;
  bottom?: ResponsiveValue<number>;
  left?: ResponsiveValue<number>;
}

export const activityIndicatorProps = [
  'animating',
  'color',
  'hidesWhenStopped',
  'size',
] as const;
export interface ActivityIndicatorPropsType {
  animating?: boolean;
  color?: string | undefined;
  hidesWhenStopped?: boolean;
  size?: number | 'small' | 'large' | 'sm' | 'lg' | undefined;
}

export const backgroundProps = ['bg'] as const;
export interface BackgroundPropsType {
  bg?: ResponsiveValue<string>;
}

export const backgroundImgProps = ['bgImg', 'bgMode'] as const;
export interface BackgroundImgPropsType {
  bgImg?: RNImageSourcePropType;
  bgMode?: 'contain' | 'cover' | 'stretch' | 'repeat';
}

export const textProps = [
  'color',
  'fontSize',
  'textDecorLine',
  'textDecorStyle',
  'fontStyle',
  'textDecorColor',
  'fontWeight',
  'fontFamily',
  'lineHeight',
  'textAlign',
  'textTransform',
  'letterSpacing',
  'textAlignVertical',
] as const;
export interface TextPropsType {
  color?: ResponsiveValue<string>;
  fontSize?: ResponsiveValue<string | number>;
  textDecorLine?: ResponsiveValue<
    'none' | 'underline' | 'line-through' | 'underline line-through'
  >;
  textDecorStyle?: ResponsiveValue<'solid' | 'double' | 'dotted' | 'dashed'>;
  fontStyle?: ResponsiveValue<'normal' | 'italic'>;
  textDecorColor?: ResponsiveValue<string>;
  fontWeight?: ResponsiveValue<
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
  >;
  fontFamily?: ResponsiveValue<string>;
  lineHeight?: ResponsiveValue<number>;
  textAlign?: ResponsiveValue<'auto' | 'left' | 'right' | 'center' | 'justify'>;
  textTransform?: ResponsiveValue<
    'none' | 'uppercase' | 'lowercase' | 'capitalize'
  >;
  letterSpacing?: ResponsiveValue<number>;
  textAlignVertical?: ResponsiveValue<'auto' | 'top' | 'bottom' | 'center'>;
  textDecorationLine?: ResponsiveValue<
    'none' | 'underline' | 'line-through' | 'underline line-through'
  >;
  textDecorationStyle?: ResponsiveValue<
    'solid' | 'double' | 'dotted' | 'dashed'
  >;
  textDecorationColor?: ResponsiveValue<string>;
  textShadowColor?: ResponsiveValue<string>;
  textShadowOffset?: ResponsiveValue<{ width: number; height: number }>;
  textShadowRadius?: ResponsiveValue<number>;
}

export const opacityProps = ['opacity'] as const;
export interface OpacityPropsType {
  opacity?: ResponsiveValue<number>;
}

export const overflowProps = ['overflow'] as const;
export interface OverflowPropsType {
  overflow?: ResponsiveValue<'hidden' | 'visible' | 'scroll'>;
}

export const zIndexProps = ['zIndex'] as const;
export interface ZIndexPropsType {
  zIndex?: ResponsiveValue<number>;
}

export const loadingProps = ['isLoading', 'loaderSize', 'loaderColor'] as const;
export interface LoadingPropsType {
  isLoading?: boolean;
  loaderSize?: number | string;
  loaderColor?: string;
}

export const preffixSuffixProps = ['preffix', 'suffix'] as const;
export interface PrefixSuffixPropsType {
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
}

export const inputProps = ['focusBorderColor'] as const;
export interface InputPropsType {
  focusBorderColor?: ResponsiveValue<string>;
}

export const disabledProps = ['isDisabled'] as const;
export interface DisabledPropsType {
  isDisabled?: null | boolean;
}

export const buttonProps = [
  'underlayColor',
  'full',
  'rippleColor',
  'ripple',
  'colorScheme',
] as const;
export interface ButtonPropsType {
  underlayColor?: ResponsiveValue<string>;
  full?: ResponsiveValue<boolean>;
  rippleColor?: ResponsiveValue<string>;
  ripple?: ResponsiveValue<boolean>;
  colorScheme?: ResponsiveValue<string>;
}

export const overlayProps = ['overlayColor', 'overlayOpacity'] as const;
export interface OverlayPropsType {
  overlayColor?: ResponsiveValue<string>;
  overlayOpacity?: ResponsiveValue<number>;
}

export const variantProps = ['variant'] as const;
export interface VariantPropsType {
  variant?: ResponsiveValue<string>;
}

export function handleResponsiveProps<
  T extends Record<string, ResponsiveValue<any>>
>(props: T, theme: ThemeType, windowWidth: number): any {
  let newProps = {};

  for (const prop in props) {
    const value = props[prop];

    newProps = { ...newProps, [prop]: value };

    if (
      typeof value === 'object' &&
      value !== null &&
      !React.isValidElement(value) &&
      !Array.isArray(value)
    ) {
      // Handle as an object with responsive values
      for (const breakpoint in value) {
        if (theme?.breakpoints && breakpoint in theme?.breakpoints) {
          const themeBreakpointValue = (theme.breakpoints as Record<
            string,
            number
          >)[breakpoint];
          console.log({ themeBreakpointValue, windowWidth });
          if (windowWidth >= themeBreakpointValue) {
            newProps = { ...newProps, [prop]: value[breakpoint] };
          }
        }
      }
    }
  }
  return newProps;
}
