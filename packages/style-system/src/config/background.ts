import { t } from '../utils';
import { Config } from '../utils/prop-config';

export const background: Config<BackgroundProps> = {
  bg: t.colors('backgroundColor'),
};

export interface BackgroundProps {
  bg?: string;
}
