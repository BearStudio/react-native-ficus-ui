import { TextStyle, ViewStyle } from 'react-native';

import { Config } from '../utils/prop-config';

export const interactivty: Config<InteractivityProps> = {
  pointerEvents: true,
  userSelect: true,
};

export interface InteractivityProps {
  pointerEvents: ViewStyle['pointerEvents'];
  userSelect: TextStyle['userSelect'];
}
