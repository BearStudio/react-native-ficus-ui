import { omit } from '@chakra-ui/utils';

import { ThemeTypings } from './theme.types';
import { Dict, ResponsiveValue } from './utils/types';

export interface ThemingProps<ThemeComponent extends string = any> {
  variant?: ResponsiveValue<
    ResponsiveValue<
      ThemeComponent extends keyof ThemeTypings['components']
        ? ThemeTypings['components'][ThemeComponent]['variants']
        : string
    >
  >;
  size?: ResponsiveValue<
    ThemeComponent extends keyof ThemeTypings['components']
      ? ThemeTypings['components'][ThemeComponent]['sizes']
      : string
  >;
  colorScheme?: ThemeTypings['colorSchemes'];
  styleConfig?: Dict;
}

export function omitThemingProps<T extends ThemingProps>(props: T) {
  return omit(props, ['size', 'variant', 'colorScheme', 'styleConfig']);
}
