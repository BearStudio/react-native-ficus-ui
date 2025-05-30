import {
  TextStyleProps,
  ThemingProps,
  omitThemingProps,
  splitTextProps,
} from 'react-native-ficus-ui/style-system';

import {
  type NativeFicusProps,
  ficus,
  forwardRef,
  useStyleConfig,
} from '../system';

export interface BadgeProps
  extends NativeFicusProps<'View'>,
    TextStyleProps,
    ThemingProps<'Badge'> {}

export const Badge = forwardRef<BadgeProps, 'View'>(function Badge(props, ref) {
  const styles = useStyleConfig('Badge', props);

  const { children, ...rest } = omitThemingProps(props);
  const [textStyles, restStyles] = splitTextProps(styles);

  return (
    <ficus.View ref={ref} {...rest} __styles={restStyles}>
      <ficus.Text __styles={textStyles}>{children}</ficus.Text>
    </ficus.View>
  );
});
