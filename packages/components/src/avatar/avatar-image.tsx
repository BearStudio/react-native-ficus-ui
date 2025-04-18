import { SystemStyleObject } from '@ficus-ui/style-system';

import { Image, ImageProps } from '../image';
import { useImage } from '../image/use-image';
import { AvatarLabel } from './avatar-label';
import { AvatarOptions } from './avatar.types';

interface AvatarImageProps
  extends ImageProps,
    Pick<AvatarOptions, 'name' | 'getInitials'> {
  labelStyles: SystemStyleObject;
}
export function AvatarImage(props: AvatarImageProps) {
  const { name, src, getInitials, borderRadius, labelStyles } = props;

  const status = useImage({ src });

  const hasLoaded = status === 'loaded';

  const showFallback = !hasLoaded || !src;

  const imageStyles = {
    width: '100%',
    height: '100%',
    borderRadius,
  };

  if (showFallback) {
    return (
      <AvatarLabel
        getInitials={getInitials}
        name={name}
        __styles={{ ...labelStyles }}
      />
    );
  }

  return <Image src={src} alt={name} __styles={imageStyles} />;
}
