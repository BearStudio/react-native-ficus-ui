import { CustomStates, Dict, stateStyleResolver } from '../../style-system';
import { ColorMode } from '../../theme/context';

export function getStateStyles<T extends Partial<CustomStates>>(
  states: T,
  styles: Dict,
  colorMode: ColorMode
) {
  const getStyles = stateStyleResolver(states, colorMode);

  return getStyles(styles);
}
