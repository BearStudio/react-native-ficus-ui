import { mergeWith, runIfFn, splitProps } from '@chakra-ui/utils';

import { ColorMode } from '../theme/context';
import { isStyleProp } from './system';
import { Dict, ResponsiveValue } from './utils';
import { expandResponsive } from './utils';

type Theme = Dict;

type ValueType = ResponsiveValue<string | number>;

type Config = {
  parts?: string[];
  baseStyle?: Record<string, any>;
  variants?: Record<string, any>;
  sizes?: Record<string, any>;
};

/**
 * `size` and `variant` are special props that are not resolved in the style-system.
 * We need to take care of the responsive values here.
 */
function createResolver(theme: Theme, colorMode?: ColorMode) {
  return function resolver(
    config: Config,
    prop: 'variants' | 'sizes',
    value: ValueType | undefined,
    props: Record<string, any>
  ) {
    const result: Record<string, any> = {};

    if (!value) {
      return;
    }

    const isMultipart = !!config.parts;

    const propValue = {
      [prop]: config[prop]?.[value as keyof (typeof config)[typeof prop]],
    };

    const _styles = expandResponsive(propValue)(theme);
    const styles = runIfFn(_styles[prop], props);

    if (!styles) {
      return;
    }

    const stylesResult =
      colorMode && colorMode === 'dark'
        ? { ...styles, ...styles._dark }
        : styles;

    if (isMultipart) {
      config.parts?.forEach((part) => {
        mergeWith(result, {
          [part]: stylesResult[part],
        });
      });
    }

    return stylesResult;
  };
}

type Values = {
  theme: Theme;
  variant?: ValueType;
  size?: ValueType;
  colorMode?: ColorMode;
  _dark?: Dict;
};

function applyDarkModeStyles(
  style: Record<string, any>,
  colorMode?: 'light' | 'dark'
): Record<string, any> {
  if (typeof style !== 'object' || style === null) return style;

  let result: Record<string, any> = {};

  for (const key in style) {
    if (key === '_dark') continue;

    const value = style[key];

    if (typeof value === 'object' && value !== null) {
      result[key] = applyDarkModeStyles(value, colorMode);
    } else {
      result[key] = value;
    }
  }

  if (
    colorMode === 'dark' &&
    typeof style._dark === 'object' &&
    style._dark !== null
  ) {
    const darkOverrides = applyDarkModeStyles(style._dark, colorMode);
    result = {
      ...result,
      ...darkOverrides,
    };
  }

  return result;
}

export function resolveStyleConfig(config: Config) {
  return (props: Values) => {
    const { variant, size, theme, colorMode, _dark, ...rest } = props;
    const recipe = createResolver(theme, colorMode);

    const [restStyles] = splitProps(rest, isStyleProp);

    const baseStyle = runIfFn(config.baseStyle ?? {}, props);
    const baseStyleResult = applyDarkModeStyles(baseStyle, colorMode);

    return mergeWith(
      {},
      baseStyleResult,
      recipe(config, 'sizes', size, props),
      recipe(config, 'variants', variant, props),
      restStyles
    );
  };
}
