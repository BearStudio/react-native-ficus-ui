import { type NativeFicusProps, ficus, forwardRef } from '../system';

interface ImageOptions {
  src?: string;
}

export interface ImageProps extends NativeFicusProps<'Image'>, ImageOptions {}

export const Image = forwardRef<ImageProps, 'Image'>((props, ref) => {
  const { src, ...rest } = props;
  return <ficus.Image ref={ref} {...rest} source={{ uri: src }} />;
});
