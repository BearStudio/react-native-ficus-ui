import { Dict, isObject, mergeWith, runIfFn } from '@chakra-ui/utils';

import { systemProps } from './system';
import { SystemStyleObject } from './system.types';
import { expandResponsive } from './utils/expand-responsive';
import { Config, PropConfig } from './utils/prop-config';

interface GetStyleSheetOptions {
  theme: { [key: string]: any };
  configs?: Config;
}

/**
 * This is the function that will be used to convert all the props to react native StyleSheet
 */
export function getStyleSheet({ configs = {}, theme }: GetStyleSheetOptions) {
  const styleSheet = (stylesOrFn: Record<string, any>) => {
    const _styles = runIfFn(stylesOrFn, theme);

    const styles = expandResponsive(_styles)(theme);

    let computedStyles: Dict = {};

    for (let key in styles) {
      let value = styles[key];

      let config = configs[key];

      if (config === true) {
        config = { property: key } as PropConfig;
      }

      // if (isObject(value)) {
      //   computedStyles[key] = computedStyles[key] ?? {};
      //   computedStyles[key] = mergeWith(
      //     {},
      //     computedStyles[key],
      //     styleSheet(value, true)
      //   );
      //   continue;
      // }

      /**
       * Add the peer properties to help for computing the value
       * e.g. fontWeight needs fontFamily
       */
      if (config?.peerProperties) {
        const peerProperties = config.peerProperties;

        for (let i in peerProperties) {
          const peerProperty = peerProperties[i]!;
          value = {
            [key]: value, // Preserve original value
            [peerProperty]: styles[peerProperty] ?? undefined,
          };
        }
      }

      /**
       * The value of the property after transformation
       * */
      let rawValue =
        config?.transform?.(
          value,
          config.scope ? theme[config.scope] : theme
        ) ?? value;

      /**
       * The StyleSheet property or property array this prop style key maps to
       */
      const configProperty = config?.property;

      if (configProperty && Array.isArray(configProperty)) {
        for (const property of configProperty) {
          computedStyles[property] = rawValue;
        }
        continue;
      }

      // We know configProperty is not an array
      if (configProperty) {
        computedStyles[configProperty as string] = rawValue;

        continue;
      }

      if (isObject(rawValue)) {
        computedStyles = mergeWith({}, computedStyles, rawValue);
        continue;
      }

      computedStyles[key] = rawValue;
    }

    return computedStyles;
  };

  return styleSheet;
}

export const styleSheet = (styles: SystemStyleObject) => (theme: any) => {
  const styleSheetFn = getStyleSheet({
    theme,
    configs: systemProps,
  });

  return styleSheetFn(styles);
};
