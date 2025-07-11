import { t } from '../utils';
import { Config } from '../utils/prop-config';

export const color: Config<ColorProps> = {
  overlayColor: t.colors('overlayColor'),
  shadowColor: t.colors('shadowColor'),
};

export interface ColorProps {
  overlayColor?: string;
  shadowColor?: string;
}
