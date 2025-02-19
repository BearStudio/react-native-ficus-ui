import { ViewStyle } from 'react-native';

import { t } from '../utils';
import { Config } from '../utils/prop-config';
import { ResponsiveValue } from '../utils/types';

export const border: Config<BorderProps> = {
  borderWidth: t.borderWidths('borderWidth'),
  borderTopWidth: t.borderWidths('borderTopWidth'),
  borderRightWidth: t.borderWidths('borderRightWidth'),
  borderBottomWidth: t.borderWidths('borderBottomWidth'),
  borderLeftWidth: t.borderWidths('borderLeftWidth'),
  borderStartWidth: t.borderWidths('borderStartWidth'),
  borderEndWidth: t.borderWidths('borderEndWidth'),
  borderColor: t.colors('borderColor'),
  borderTopColor: t.colors('borderTopColor'),
  borderRightColor: t.colors('borderRightColor'),
  borderBottomColor: t.colors('borderBottomColor'),
  borderLeftColor: t.colors('borderLeftColor'),
  borderStyle: t.borderStyles('borderStyle'),
};

export interface BorderProps {
  borderWidth?: ResponsiveValue<number>;
  borderTopWidth?: ResponsiveValue<number>;
  borderRightWidth?: ResponsiveValue<number>;
  borderBottomWidth?: ResponsiveValue<number>;
  borderLeftWidth?: ResponsiveValue<number>;
  borderStartWidth?: ResponsiveValue<number>;
  borderEndWidth?: ResponsiveValue<number>;
  borderColor?: ResponsiveValue<string>;
  borderTopColor?: ResponsiveValue<string>;
  borderRightColor?: ResponsiveValue<string>;
  borderBottomColor?: ResponsiveValue<string>;
  borderLeftColor?: ResponsiveValue<string>;
  borderStyle?: ResponsiveValue<ViewStyle['borderStyle']>;
}
