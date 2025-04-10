import { type NativeFicusProps, ficus, forwardRef } from '../system';

interface ImageOptions {
  /**
   * The React native `source.uri` property
   */
  src?: string;
}

export interface ImageProps extends NativeFicusProps<'Image'>, ImageOptions {}

export const Image = forwardRef<ImageProps, 'Image'>((props, ref) => {
  const { src, source: sourceProp, ...rest } = props;

  const getSourceProp = () => {
    if (typeof sourceProp === 'number') {
      return sourceProp;
    }

    return {
      uri: src,
      ...sourceProp,
    };
  };

  return <ficus.Image ref={ref} {...rest} source={getSourceProp()} />;
});
