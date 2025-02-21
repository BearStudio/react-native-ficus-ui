import {
  ThemingProps,
  omitThemingProps,
  splitTextProps,
} from '@ficus-ui/style-system';

import {
  type NativeFicusProps,
  ficus,
  forwardRef,
  useStyleConfig,
} from '../system';

export interface FlexProps
  extends NativeFicusProps<'View'>,
    ThemingProps<'Flex'> {}

export const Flex = forwardRef<FlexProps, 'View'>(function Flex(props, ref) {
  const styles = useStyleConfig('Flex', props);
  const { children, ...rest } = omitThemingProps(props);
  const [restStyles] = splitTextProps(styles);
  return (
    <ficus.View ref={ref} __styles={restStyles} {...rest}>
      {children}
    </ficus.View>
  );
});
