import { splitProps } from '@chakra-ui/utils';
import { Dict, isStyleProp } from 'react-native-ficus-ui/style-system';

import { NativeFicusProps, ficus, forwardRef } from '../system';

export interface TouchableWithoutFeedbackProps
  extends NativeFicusProps<'TouchableWithoutFeedback'> {}

export const TouchableWithoutFeedback = forwardRef<
  TouchableWithoutFeedbackProps,
  'View'
>(function TouchableWithoutFeedback(props, ref) {
  const [styles, touchableProps] = splitProps(props as Dict, isStyleProp);

  const { children, ...rest } =
    touchableProps as Partial<TouchableWithoutFeedbackProps>;

  /**
   * We need to render a View inside because React Native TouchableWithoutFeedback is not stylable
   */
  return (
    <ficus.TouchableWithoutFeedback ref={ref} {...rest}>
      <ficus.View __styles={styles}>{children}</ficus.View>
    </ficus.TouchableWithoutFeedback>
  );
});
