import { omitThemingProps } from '@ficus-ui/style-system';

import {
  type NativeFicusProps,
  ficus,
  forwardRef,
  useStyleConfig,
} from '../system';

export interface TextProps extends NativeFicusProps<'Text'> {}
export const Text = forwardRef<TextProps, 'Text'>(function Text(props, ref) {
  const styles = useStyleConfig('Text', props);
  const { children, ...rest } = omitThemingProps(props);

  return (
    <ficus.Text ref={ref} {...rest} __styles={styles}>
      {children}
    </ficus.Text>
  );
});
