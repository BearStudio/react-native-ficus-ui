import {
  TextStyleProps,
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

export interface TextProps
  extends NativeFicusProps<'Text'>,
    TextStyleProps,
    ThemingProps<'Text'> {}
export const Text = forwardRef<TextProps, 'Text'>(function Text(props, ref) {
  const styles = useStyleConfig('Text', props);
  const { children, ...rest } = omitThemingProps(props);

  const [textStyles] = splitTextProps(styles);

  return (
    <ficus.Text ref={ref} {...rest} __styles={textStyles}>
      {children}
    </ficus.Text>
  );
});
