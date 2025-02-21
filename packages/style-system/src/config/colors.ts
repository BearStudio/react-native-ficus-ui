import { t } from '../utils';
import { Config } from '../utils/prop-config';

export const color: Config<ColorProps> = {
  color: t.colors('color'),
  overlayColor: t.colors('overlayColor'),
  shadowColor: t.colors('shadowColor'),
};

export interface ColorProps {
  color?: string;
  overlayColor?: string;
  shadowColor?: string;
}
