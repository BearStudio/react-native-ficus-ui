import { FlexStyle, ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { ThemeScope } from '../theme.types';
import { createTransform } from './create-transform';
import { Transform } from './types';

export type RNStyleSheet = TextStyle & ViewStyle & FlexStyle & ImageStyle;

export type RNStyleSheetProperties = keyof RNStyleSheet;

type MaybeArray<T> = T | T[];

export interface PropConfig {
  /**
   * The theme scope this maps to
   */
  scope?: ThemeScope;
  /**
   * StyleSheet or React Native prop
   * This can be undefined in case the property maps to a theme aware style that includes several properties.
   * E.g. `shadow` prop which maps to the theme scope `shadows`
   */
  property?: MaybeArray<RNStyleSheetProperties | (string & {})>;
  /**
   * Function to transform the value passed
   */
  transform?: Transform;
}

export type Config<T = string> = Record<
  T extends Record<string, any> ? keyof T : string,
  PropConfig | true // True if ficus prop and style prop have same name and do not need transformation
>;

export function toConfig(scope: ThemeScope, transform?: Transform) {
  return <T extends RNStyleSheetProperties>(property?: T | T[]) => {
    const result: PropConfig = { property, scope };
    result.transform = createTransform({
      transform,
    });

    return result;
  };
}
