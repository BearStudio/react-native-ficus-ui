import { ThemingProps, omitThemingProps } from '../../style-system';
import { NativeFicusProps, ficus, useStyleConfig } from '../system';

export interface CenterProps
  extends NativeFicusProps<'View'>,
    ThemingProps<'View'> {}

export const Center = function Center(props: CenterProps) {
  const styles = useStyleConfig('Center', props);
  const { ...rest } = omitThemingProps(props);

  return <ficus.View __styles={styles} {...rest} />;
};
