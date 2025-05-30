import {
  CustomStates,
  Dict,
  stateStyleResolver,
} from 'react-native-ficus-ui/style-system';

export function getStateStyles<T extends Partial<CustomStates>>(
  states: T,
  styles: Dict
) {
  const getStyles = stateStyleResolver(states);

  return getStyles(styles);
}
