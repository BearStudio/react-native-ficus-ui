import { isObject, mergeWith, runIfFn } from '@chakra-ui/utils';

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

function normalize(value: any) {
  if (Array.isArray(value)) {
    return value;
  }

  if (isObject(value)) {
    return Object.values(value);
  }

  if (value !== null) {
    return [value];
  }
}

// TODO: Handle multiparts
/**
 * `size` and `variant` are special props that are not resolved in the style-system.
 * We need to take care of the responsive values here.
 */
function createResolver(theme: Theme) {
  return function resolver(
    config: Config,
    prop: 'variants' | 'sizes',
    value: ValueType | undefined,
    props: Record<string, any>
  ) {
    const result: Record<string, any> = {};

    const normalized = normalize(value);

    if (!normalized) {
      return;
    }

    const isMultipart = !!config.parts;

    const propValue = {
      [prop]: normalized.map((norm) => config[prop]?.[norm]),
    };

    const _styles = expandResponsive(propValue)(theme);
    const styles = runIfFn(_styles[prop], props);

    if (!styles) {
      return;
    }

    if (isMultipart) {
      config.parts?.forEach((part) => {
        mergeWith(result, {
          [part]: styles[part],
        });
      });
    }

    return styles;
  };
}

type Values = {
  theme: Theme;
  variant?: ValueType;
  size?: ValueType;
};

export function resolveStyleConfig(config: Config) {
  return (props: Values) => {
    const { variant, size, theme, ...rest } = props;
    const recipe = createResolver(theme);

    return mergeWith(
      {},
      runIfFn(config.baseStyle ?? {}, props),
      recipe(config, 'sizes', size, props),
      recipe(config, 'variants', variant, props),
      rest
    );
  };
}
