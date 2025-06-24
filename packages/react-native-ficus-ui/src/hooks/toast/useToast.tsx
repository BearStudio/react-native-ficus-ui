import Toast from 'react-native-toast-message';

import { ThemeToastProps } from '../../theme/theme.default';
import { useColorMode } from '../color-mode/useColorMode';

const useToast = () => {
  const { show, hide } = Toast;

  const { colorMode } = useColorMode();

  const showToast = (props: ThemeToastProps) =>
    show({ props: { colorMode }, ...props });

  return { show: showToast, hide, Toast };
};

export { useToast };
