import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  EffectProps,
  FlexboxProps,
  InteractivityProps,
  LayoutProps,
  PositionProps,
  RadiusProps,
  SpaceProps,
} from './config';
import { RNStyleSheet, RNStyleSheetProperties } from './utils/prop-config';
import { Dict, ResponsiveValue } from './utils/types';

export interface StyleProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    EffectProps,
    FlexboxProps,
    InteractivityProps,
    LayoutProps,
    PositionProps,
    RadiusProps,
    SpaceProps {}

export interface SystemStyleSheetProperties
  extends RNStyleSheet,
    Omit<StyleProps, RNStyleSheetProperties> {}

export type ThemeThunk<T> = T | ((theme: Record<string, any>) => T);

type PropertyValue<K extends keyof SystemStyleSheetProperties> = ThemeThunk<
  ResponsiveValue<boolean | number | string | SystemStyleSheetProperties[K]>
>;

export type StyleSheetWithMultiValues = {
  [K in keyof SystemStyleSheetProperties]?: K extends keyof StyleProps
    ? StyleProps[K] | PropertyValue<K>
    : PropertyValue<K>;
};

type StyleSheetDefinition<D> =
  | D
  | string
  | RecursiveStyleSheetSelector<D | string>;

export interface RecursiveStyleSheetSelector<D> {
  [selector: string]: StyleSheetDefinition<D> & D;
}

export type RecursiveStyleSheetObject<D> = D &
  (D | RecursiveStyleSheetSelector<D>);

export type SystemStyleObject =
  RecursiveStyleSheetObject<StyleSheetWithMultiValues>;

type Assign<T, U> = Omit<T, keyof U> & U;

/**
 * We might need to extend SystemProps.
 * For example for Text
 */
export type SystemProps<ExtraProps extends Dict = {}> = Assign<
  StyleProps,
  ExtraProps
>;

/**
 * Extensible style props
 */
export type { TextStyleProps } from './config';
