import { Config } from '../utils/prop-config';
import { Dict } from '../utils/types';

export const common: Config<CommonProps> = {
  _dark: true,
};

/**
 * Common props
 */
export interface CommonProps {
  _dark?: Dict;
}
