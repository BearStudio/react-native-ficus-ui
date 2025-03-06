import { t } from '../utils';
import { Config } from '../utils/prop-config';
import { ResponsiveValue } from '../utils/types';

export const position: Config<PositionProps> = {
  position: true,
  top: t.space('top'),
  right: t.space('right'),
  bottom: t.space('bottom'),
  left: t.space('left'),
  zIndex: true,
  elevation: t.space('elevation'),
};

export interface PositionProps {
  position?: ResponsiveValue<'absolute' | 'relative'>;
  top?: ResponsiveValue<number>;
  right?: ResponsiveValue<number>;
  bottom?: ResponsiveValue<number>;
  left?: ResponsiveValue<number>;
  zIndex?: ResponsiveValue<number>;
  elevation?: ResponsiveValue<number>;
}
