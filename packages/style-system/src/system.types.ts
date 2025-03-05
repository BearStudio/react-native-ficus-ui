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
import { PseudoStyleKey } from './pseudos';
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

type PseudoSelectorDefinition<D> = D | RecursivePseudo<D>;

export type RecursivePseudo<D> = {
  // eslint-disable-next-line no-unused-vars
  [K in PseudoStyleKey]?: PseudoSelectorDefinition<D> & D;
};

type StyleSheetDefinition<D> =
  | D
  | string
  | RecursiveStyleSheetSelector<D | string>;

export interface RecursiveStyleSheetSelector<D> {
  [selector: string]: StyleSheetDefinition<D> & D;
}

export type RecursiveStyleSheetObject<D> = D &
  (D | RecursivePseudo<D> | RecursiveStyleSheetSelector<D>);

export type SystemStyleObject =
  RecursiveStyleSheetObject<StyleSheetWithMultiValues>;

type PseudoProps = {
  // eslint-disable-next-line no-unused-vars
  [K in PseudoStyleKey]?: SystemStyleObject;
};

type Assign<T, U> = Omit<T, keyof U> & U;

/**
 * We might need to extend SystemProps with ExtraProps.
 * For example for Text style props
 *
 * To be able to use React Native `style` prop with theme value, each prop should be added to the System Config.
 *
 * @example
 * If `backgroundColor` is not in the style system config:
 * ❌ <MyFicusComponent style={{backgroundColor: 'green.800'}} />
 * ✅ <MyFicusComponent style={{backgroundColor: '#22543D'}} />
 *
 */
export type SystemProps<ExtraProps extends Dict = {}> = Assign<
  StyleProps & PseudoProps,
  ExtraProps
>;

/**
 * Extensible style props
 */
export type { TextStyleProps } from './config';
