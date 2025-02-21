import { SystemProps } from '@ficus-ui/style-system';

import { type NativeFicusProps, ficus, forwardRef } from '../system';

export interface FlexOptions {
  align?: SystemProps['alignItems'];
  justify?: SystemProps['justifyContent'];
  wrap?: SystemProps['flexWrap'];
  direction?: SystemProps['flexDirection'];
  basis?: SystemProps['flexBasis'];
  grow?: SystemProps['flexGrow'];
  shrink?: SystemProps['flexShrink'];
}

export interface FlexProps extends NativeFicusProps<'View'>, FlexOptions {}

export const Flex = forwardRef<FlexProps, 'View'>(function Flex(props, ref) {
  const { direction, align, justify, wrap, basis, grow, shrink, ...rest } =
    props;

  const styles = {
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink,
  };

  return <ficus.View ref={ref} __styles={styles} {...rest} />;
});
