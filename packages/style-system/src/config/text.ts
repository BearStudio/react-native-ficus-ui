import { TextStyle } from 'react-native';

import { t } from '../utils';
import { Config } from '../utils/prop-config';
import { transforms } from '../utils/transform-functions';
import { ResponsiveValue } from '../utils/types';

export const text: Config<TextStyleProps> = {
  fontSize: t.prop('fontSize', 'fontSizes', transforms.getThemeProp),
  textDecorLine: t.prop('textDecorationLine'),
  textDecorStyle: t.prop('textDecorationStyle'),
  fontStyle: true,
  textDecorColor: t.colors('textDecorationColor'),
  fontWeight: t.prop('fontWeight', 'fontWeights', transforms.getThemeProp),
  fontFamily: t.prop('fontFamily', 'fonts', transforms.getThemeProp),
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

export interface TextStyleProps {
  fontSize?: ResponsiveValue<string | number>;
  textDecorLine?: ResponsiveValue<TextStyle['textDecorationLine']>;
  textDecorStyle?: ResponsiveValue<TextStyle['textDecorationStyle']>;
  fontStyle?: ResponsiveValue<TextStyle['fontSize']>;
  textDecorColor?: ResponsiveValue<string>;
  fontWeight?: ResponsiveValue<TextStyle['fontWeight']>;
  fontFamily?: ResponsiveValue<string>;
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
