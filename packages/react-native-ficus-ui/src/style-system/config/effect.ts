import { ViewStyle } from 'react-native';

import { t } from '../utils';
import { Config } from '../utils/prop-config';
import { ResponsiveValue } from '../utils/types';

export const effect: Config<EffectProps> = {
  boxShadow: true,
  shadow: t.shadows(),
  shadowOpacity: true,
  shadowOffset: t.shadows('shadowOffset'),
  shadowRadius: t.radius('shadowRadius'),
  opacity: true,
  filter: true,
};

export interface EffectProps {
  boxShadow?: ViewStyle['boxShadow'];
  shadow?: string;
  shadowOpacity?: ResponsiveValue<number | string>;
  shadowOffset?: ResponsiveValue<ViewStyle['shadowOffset']>;
  shadowRadius?: ResponsiveValue<ViewStyle['shadowRadius']>;
  opacity?: ResponsiveValue<number | string>;
  filter?: ViewStyle['shadowOffset'];
}
