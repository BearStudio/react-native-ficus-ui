import { ViewStyle } from 'react-native';

import { t } from '../utils';
import { Config } from '../utils/prop-config';
import { ResponsiveValue } from '../utils/types';

export const layout: Config<LayoutProps> = {
  minH: t.sizes('minHeight'),
  minW: t.sizes('minWidth'),
  maxH: t.sizes('maxHeight'),
  maxW: t.sizes('maxWidth'),
  h: t.sizes('height'),
  w: t.sizes('width'),
  overflow: true,
  display: true,
  aspectRatio: true,
};

type Overflow = ViewStyle['overflow'];
type Display = ViewStyle['display'];
export interface LayoutProps {
  minH?: ResponsiveValue<number | string>;
  minW?: ResponsiveValue<number | string>;
  maxH?: ResponsiveValue<number | string>;
  maxW?: ResponsiveValue<number | string>;
  h?: ResponsiveValue<number | string>;
  w?: ResponsiveValue<number | string>;
  overflow?: ResponsiveValue<Overflow>;
  display: ResponsiveValue<Display>;
  aspectRatio?: ResponsiveValue<string | number>;
}
