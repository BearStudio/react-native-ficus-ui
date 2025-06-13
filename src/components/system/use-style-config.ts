import { useRef } from 'react';

import { compact, memoizedGet as get, mergeWith, omit } from '@chakra-ui/utils';
import isEqual from 'react-fast-compare';

import {
  Dict,
  type SystemStyleObject,
  type ThemingProps,
  resolveStyleConfig,
} from '../../style-system';
import { useTheme } from '../../theme';

type StylesRef = SystemStyleObject | Record<string, SystemStyleObject>;

function useStyleConfigFn(
  themeKey: string | null,
  props: ThemingProps & Dict = {}
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

    const isStyleEqual = isEqual(stylesRef.current, styles);

    if (!isStyleEqual) {
      stylesRef.current = styles;
    }
  }

  return stylesRef.current;
}

/**
 * Allow to resolve style config from the theme and merge it with props passed by the user.
 */
export function useStyleConfig(
  themeKey: string,
  props: ThemingProps & Record<string, any> = {}
) {
  return useStyleConfigFn(themeKey, props) as SystemStyleObject;
}

/**
 * Allow to resolve style config for multi parts component
 */
export function useMultiStyleConfig(
  themeKey: string,
  props: ThemingProps & Dict = {}
) {
  return useStyleConfigFn(themeKey, props) as Record<string, SystemStyleObject>;
}
