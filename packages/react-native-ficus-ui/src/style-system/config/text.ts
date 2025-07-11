import { TextStyle } from 'react-native';

import { t } from '../utils';
import { Config } from '../utils/prop-config';
import { transforms } from '../utils/transform-functions';
import { ResponsiveValue } from '../utils/types';

export const text: Config<TextStyleProps> = {
  color: t.colors('color'),
  textColor: t.colors('color'),
  fontSize: t.prop('fontSize', 'fontSizes', transforms.getThemeProp),
  textDecorLine: t.prop('textDecorationLine'),
  textDecorStyle: t.prop('textDecorationStyle'),
  fontStyle: true,
  textDecorColor: t.colors('textDecorationColor'),
  fontWeight: t.prop('fontWeight', 'fonts', transforms.getFontWeight, [
    'fontFamily',
  ]),
  fontFamily: t.prop('fontFamily', 'fonts', transforms.getThemeFontFamily, [
    'fontWeight',
  ]),
  lineHeight: true,
  textAlign: true,
  textTransform: true,
  letterSpacing: true,
  textAlignVertical: true,
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationColor: t.colors('textDecorationColor'),
  textShadowColor: t.colors('shadowColor'),
  textShadowOffset: t.shadows('textShadowOffset'),
  textShadowRadius: t.radius('textShadowRadius'),
};

/**
 * Only for React native Text Component
 */
export interface TextStyleProps {
  color?: string;
  textColor?: string;
  fontSize?: ResponsiveValue<string | number>;
  textDecorLine?: ResponsiveValue<TextStyle['textDecorationLine']>;
  textDecorStyle?: ResponsiveValue<TextStyle['textDecorationStyle']>;
  fontStyle?: ResponsiveValue<TextStyle['fontStyle']>;
  textDecorColor?: ResponsiveValue<string>;
  fontWeight?: ResponsiveValue<TextStyle['fontWeight']>;
  fontFamily?: ResponsiveValue<'heading' | 'mono' | (string & {})>;
  lineHeight?: ResponsiveValue<number>;
  textAlign?: ResponsiveValue<TextStyle['textAlign']>;
  textTransform?: ResponsiveValue<TextStyle['textTransform']>;
  letterSpacing?: ResponsiveValue<number>;
  textAlignVertical?: ResponsiveValue<TextStyle['textAlignVertical']>;
  textDecorationLine?: ResponsiveValue<TextStyle['textDecorationLine']>;
  textDecorationStyle?: ResponsiveValue<TextStyle['textDecorationStyle']>;
  textDecorationColor?: ResponsiveValue<string>;
  textShadowColor?: ResponsiveValue<string>;
  textShadowOffset?: ResponsiveValue<TextStyle['textShadowOffset']>;
  textShadowRadius?: ResponsiveValue<string | number>;
}
