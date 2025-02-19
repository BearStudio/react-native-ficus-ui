import { ThemeScope } from '../theme.types';
import { createTransform } from './create-transform';
import { PropConfig, toConfig } from './prop-config';
import { transforms } from './transform-functions';

export const t = {
  colors: toConfig('colors', transforms.getThemeColor),
  borderWidths: toConfig('borderWidths'),
  borderStyles: toConfig('borderStyles'),
  radius: toConfig('radius', transforms.getThemeProp),
  space: toConfig('space', transforms.getThemeProp),
  shadows: toConfig('shadows', transforms.getThemeProp),
  sizes: toConfig('sizes', transforms.getThemeProp),
  flexbox: toConfig('flexbox'),
  prop(
    property: PropConfig['property'],
    scope?: ThemeScope,
    transform?: PropConfig['transform'],
    peerProperties?: PropConfig['peerProperties']
  ) {
    return {
      property,
      scope,
      transform: createTransform({ transform }),
      peerProperties,
    };
  },
};

export * from './prop-config';
export * from './types';
