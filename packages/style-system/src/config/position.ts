import { t } from '../utils';
import { Config } from '../utils/prop-config';
import { ResponsiveValue } from '../utils/types';

export const position: Config<PositionProps> = {
  position: true,
  top: t.space('top'),
  right: t.space('top'),
  bottom: t.space('top'),
  left: t.space('top'),
  zIndex: t.space('top'),
  elevation: t.space('top'),
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
