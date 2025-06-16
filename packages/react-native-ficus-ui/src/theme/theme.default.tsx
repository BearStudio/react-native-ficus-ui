/* eslint-disable react-native/no-inline-styles */
import {
  BaseToast,
  BaseToastProps,
  ToastPosition,
} from 'react-native-toast-message';

import { components } from './components';
import { foundations } from './foundations';

export const theme = {
  components,
  ...foundations,

  toastProps: {
    position: 'bottom' as ToastPosition,
    config: {
      success: (props: BaseToastProps) => (
        <BaseToast style={{ borderLeftColor: '#38A169' }} {...props} />
      ),
      error: (props: BaseToastProps) => (
        <BaseToast style={{ borderLeftColor: '#E53E3E' }} {...props} />
      ),
      warning: (props: BaseToastProps) => (
        <BaseToast style={{ borderLeftColor: '#DD6B20' }} {...props} />
      ),
      info: (props: BaseToastProps) => (
        <BaseToast style={{ borderLeftColor: '#3182ce' }} {...props} />
      ),
    },
  },
};

export type Theme = typeof theme;
