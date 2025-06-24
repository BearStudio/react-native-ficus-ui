/* eslint-disable react-native/no-inline-styles */
import {
  BaseToast,
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
    config: {
      success: (toastProps: ThemeToastProps) => (
        <BaseToast
          style={{
            borderLeftColor:
              toastProps?.props?.colorMode === 'dark' ? '#68D391' : '#38A169',
            backgroundColor:
              toastProps?.props?.colorMode === 'dark' ? '#4A5568' : 'white',
          }}
          text1Style={{
            color:
              toastProps?.props?.colorMode === 'dark' ? 'white' : '#171923',
          }}
          text2Style={{
            color:
              toastProps?.props?.colorMode === 'dark' ? 'white' : '#1A202C',
          }}
          {...toastProps}
        />
      ),
      error: (toastProps: ThemeToastProps) => (
        <BaseToast
          style={{
            borderLeftColor:
              toastProps?.props?.colorMode === 'dark' ? '#FC8181' : '#E53E3E',
            backgroundColor:
              toastProps?.props?.colorMode === 'dark' ? '#4A5568' : 'white',
          }}
          text1Style={{
            color:
              toastProps?.props?.colorMode === 'dark' ? 'white' : '#171923',
          }}
          text2Style={{
            color:
              toastProps?.props?.colorMode === 'dark' ? 'white' : '#1A202C',
          }}
          {...toastProps}
        />
      ),
      warning: (toastProps: ThemeToastProps) => (
        <BaseToast
          style={{
            borderLeftColor:
              toastProps?.props?.colorMode === 'dark' ? '#F6AD55' : '#DD6B20',
            backgroundColor:
              toastProps?.props?.colorMode === 'dark' ? '#4A5568' : 'white',
          }}
          text1Style={{
            color:
              toastProps?.props?.colorMode === 'dark' ? 'white' : '#171923',
          }}
          text2Style={{
            color:
              toastProps?.props?.colorMode === 'dark' ? 'white' : '#1A202C',
          }}
          {...toastProps}
        />
      ),
      info: (toastProps: ThemeToastProps) => (
        <BaseToast
          style={{
            borderLeftColor:
              toastProps?.props?.colorMode === 'dark' ? '#63b3ed' : '#3182ce',
            backgroundColor:
              toastProps?.props?.colorMode === 'dark' ? '#4A5568' : 'white',
          }}
          text1Style={{
            color:
              toastProps?.props?.colorMode === 'dark' ? 'white' : '#171923',
          }}
          text2Style={{
            color:
              toastProps?.props?.colorMode === 'dark' ? 'white' : '#1A202C',
          }}
          {...toastProps}
        />
      ),
    },
  },
};

export type Theme = typeof theme;
