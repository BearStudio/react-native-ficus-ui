import {
  BaseToastProps,
  ToastPosition,
  ToastProps,
} from 'react-native-toast-message';

import { Dict } from '../style-system';
import { components } from './components';
import { foundations } from './foundations';

export interface ThemeToastProps extends BaseToastProps, ToastProps {
  props?: Dict;
}

export const theme = {
  components,
  ...foundations,

  toastProps: {
    position: 'bottom' as ToastPosition,
    config: {},
  },
};

export type Theme = typeof theme;
