import { useRef } from 'react';

import { compact, get, mergeWith, omit } from '@chakra-ui/utils';
import {
  type SystemStyleObject,
  type ThemingProps,
  resolveStyleConfig,
} from '@ficus-ui/style-system';
import { useTheme } from '@ficus-ui/theme';

type StylesRef = SystemStyleObject | Record<string, SystemStyleObject>;

function useStyleConfigFn(
  themeKey: string | null,
  props: ThemingProps & Record<string, any> = {}
) {
  const { styleConfig: styleConfigProp, ...rest } = props;

  const { theme } = useTheme();

  const themeStyleConfig = themeKey
    ? get(theme, `components.${themeKey}`)
    : undefined;

  const styleConfig = styleConfigProp || themeStyleConfig;

  const mergedProps = mergeWith(
    { theme },
    styleConfig?.defaultProps ?? {},
    compact(omit(rest, ['children'])),
    (obj, src) => (!obj ? src : undefined)
  );

  /**
   * Store the computed styles in a `ref` to avoid unneeded re-computation
   */
  const stylesRef = useRef<StylesRef>({});

  if (styleConfig) {
    const getStyles = resolveStyleConfig(styleConfig);
    const styles = getStyles(mergedProps);

    // TODO COMPARISON
    const isStyleEqual = stylesRef.current === styles;

    if (!isStyleEqual) {
      stylesRef.current = styles;
    }
  }

  return stylesRef.current;
}

export function useStyleConfig(
  themeKey: string,
  props: ThemingProps & Record<string, any> = {}
) {
  return useStyleConfigFn(themeKey, props) as SystemStyleObject;
}
