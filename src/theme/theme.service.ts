import { TextProps } from 'components/text/text.type';
import { isValidColor } from '../utilities';
import type { ThemeType } from './type';

/**
 * Create spacing styles from object of style props passed to ficus component
 *
 * m="10", mt="xl"
 *
 * @param value
 * @param theme
 */
export const createSpacingStyles = (
  props: any,
  theme: ThemeType['spacing']
) => {
  const propKeys: any = {
    p: 'padding',
    pt: 'paddingTop',
    pr: 'paddingRight',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    ps: 'paddingStart',
    m: 'margin',
    mt: 'marginTop',
    mr: 'marginRight',
    mb: 'marginBottom',
    ml: 'marginLeft',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    ms: 'marginStart',
  };

  const computedStyle: any = {};

  for (const propKey of Object.keys(propKeys)) {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      computedStyle[styleProperty] = getThemeProperty(theme, props[propKey]);
    }
  }

  return computedStyle;
};

import { TextProps } from 'components/text/text.type';
import { isValidColor } from '../utilities';
import type { ThemeType } from './type';

/**
 * Create spacing styles from object of style props passed to ficus component
 *
 * m="10", mt="xl"
 *
 * @param value
 * @param theme
 */
export const createStackSpacingStyles = (
  props: any,
  theme: ThemeType['spacing']
) => {
  const computedStyle: any = {};

  const styleProperty = propKeys['spacing'];

  if ('spacing' in props) {
    computedStyle[styleProperty] = getThemeProperty(theme, props['spacing']);
  }

  return computedStyle;
} 

/**
 * Get font weight for font
 *
 * @param
 * @param fontFamily
 * @param fontWeight
 */
export const getFontWeight = (
  themeFontFamily: ThemeType['fontFamily'],
  fontFamily: TextProps['fontFamily'],
  fontWeight: TextProps['fontWeight']
) => {
  if (fontFamily === '' || !fontWeight) {
    return fontWeight;
  }

  if (themeFontFamily) {
    if (typeof themeFontFamily[fontWeight] !== 'undefined') {
      return 'normal';
    }
  }

  if (!fontFamily) {
    return fontWeight;
  }

  return 'normal';
};

/**
 * extract the fontFamily from theme

 * @param themeFontFamily
 * @param fontWeight
 */
export const getThemeFontFamily = (
  themeFontFamily: ThemeType['fontFamily'],
  fontWeight: TextProps['fontWeight'] = 'normal'
): string | undefined => {
  if (themeFontFamily) {
    if (typeof themeFontFamily[fontWeight] !== 'undefined') {
      return themeFontFamily[fontWeight];
    }
  }

  return undefined;
};

/**
 * Get real theme color value
 *
 * @param themeColors
 * @param value
 */
export const getThemeColor = (
  themeColors: ThemeType['colors'],
  value: string | undefined
): string => {
  if (themeColors && value) {
    if (
      themeColors.hasOwnProperty(value) &&
      typeof themeColors[value] !== 'undefined'
    ) {
      const colorValue: string | String = themeColors[value] as string;
      return colorValue as string;
    }

    let colorValue: string | String = 'transparent';
    if (value.includes('.')) {
      const keyParts = value.split('.');
      let subPropertyValue: any = themeColors;
      for (const part of keyParts) {
        subPropertyValue = subPropertyValue[part];
      }
      if (
        typeof subPropertyValue === 'string' ||
        subPropertyValue instanceof String
      ) {
        colorValue = subPropertyValue;
      }
    }

    if (isValidColor(colorValue as string)) {
      return colorValue as string;
    }

    return getThemeColor(themeColors, colorValue as string);
  }

  return value as string;
};

/**
 * extract the theme property from theme
 * if thereis no theme property in the value, return the value
 *
 * @param theme
 * @param value
 */
export const getThemeProperty = (
  theme:
    | ThemeType['borderRadius']
    | ThemeType['fontSize']
    | ThemeType['shadow']
    | ThemeType['spacing']
    | undefined,
  value: any
) => {
  if (theme) {
    if (typeof theme[value] !== 'undefined') {
      return theme[value];
    }
  }
  return value;
};

/**
 * borderRadius="xl"
 *
 * @param value
 * @param theme
 */
export const createBorderRadiusStyles = (
  props: any,
  theme: ThemeType['borderRadius']
) => {
  const propKeys: any = {
    borderRadius: 'borderRadius',
    borderTopLeftRadius: 'borderTopLeftRadius',
    borderTopRightRadius: 'borderTopRightRadius',
    borderBottomLeftRadius: 'borderBottomLeftRadius',
    borderBottomRightRadius: 'borderBottomRightRadius',
    borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    borderLeftRadius: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    borderRightRadius: ['borderTopRightRadius', 'borderBottomRightRadius'],
    borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
  };

  const computedStyle: any = {};

  for (const propKey of Object.keys(propKeys)) {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      if (styleProperty instanceof Array) {
        styleProperty.forEach((property) => {
          computedStyle[property] = getThemeProperty(theme, props[propKey]);
        });
      } else {
        computedStyle[styleProperty] = getThemeProperty(theme, props[propKey]);
      }
    }
  }

  return computedStyle;
};

/**
 * adds flex property in styles
 *
 * @param props
 */
export const createFlexStyles = (props: any) => {
  const propKeys: any = {
    flex: 'flex',
  };

  const computedStyle: any = {};

  for (const propKey of Object.keys(propKeys)) {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      computedStyle[styleProperty] = props[propKey];
    }
  }

  return computedStyle;
};

/**
 * create borderWidth styles
 *
 * @param value
 */
export const createBorderWidthStyles = (props: any) => {
  const propKeys: any = {
    borderWidth: 'borderWidth',
    borderStartWidth: 'borderStartWidth',
    borderEndWidth: 'borderEndWidth',
    borderTopWidth: 'borderTopWidth',
    borderLeftWidth: 'borderLeftWidth',
    borderRightWidth: 'borderRightWidth',
    borderBottomWidth: 'borderBottomWidth',
  };

  const computedStyle: any = {};

  for (const propKey of Object.keys(propKeys)) {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      computedStyle[styleProperty] = props[propKey];
    }
  }

  return computedStyle;
};

/**
 * create borderRadius styles
 *
 * @param value
 */
export const createBorderColorStyles = (
  props: any,
  theme: ThemeType['colors']
) => {
  const propKeys: any = {
    borderColor: 'borderColor',
    borderTopColor: 'borderTopColor',
    borderRightColor: 'borderRightColor',
    borderLeftColor: 'borderLeftColor',
    borderBottomColor: 'borderBottomColor',
  };

  const computedStyle: any = {};

  for (const propKey of Object.keys(propKeys)) {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      if (styleProperty instanceof Array) {
        styleProperty.forEach((property) => {
          computedStyle[property] = getThemeColor(theme, props[propKey]);
        });
      } else {
        computedStyle[styleProperty] = getThemeColor(theme, props[propKey]);
      }
    }
  }

  return computedStyle;
};

/**
 * adds shadows property in styles
 *
 * @param props
 */
export const createShadowStyles = (props: any, theme: ThemeType) => {
  let computedStyle: any = {};

  if (props.shadow) {
    computedStyle = {
      ...(theme.shadow && theme.shadow[props.shadow]),
      shadowColor: getThemeColor(theme.colors, props.shadowColor),
    };
  }

  return computedStyle;
};

/**
 * position="absolute"
 * top={10}
 *
 * @param value
 */
export const createPositionStyle = (props: any) => {
  const propKeys: any = {
    position: 'position',
    top: 'top',
    left: 'left',
    right: 'right',
    bottom: 'bottom',
  };

  const computedStyle: any = {};

  for (const propKey of Object.keys(propKeys)) {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      computedStyle[styleProperty] = props[propKey];
    }
  }

  return computedStyle;
};
