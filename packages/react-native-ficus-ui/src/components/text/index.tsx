import { type NativeFicusProps, ficus, useStyleConfig } from '../system';
import { omitThemingProps, ThemingProps } from '../../style-system';

export interface TextProps extends NativeFicusProps<'Text'>, ThemingProps<'Text'> {}

export const Text = function Text(props: TextProps) {
  const styles = useStyleConfig('Text', props);

  const { ...rest } = omitThemingProps(props);

  return (
     <ficus.Text __styles={styles} {...rest} />
  );
};

