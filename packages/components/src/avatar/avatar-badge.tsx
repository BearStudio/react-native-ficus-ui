import { useMemo } from 'react';

import { NativeFicusProps, ficus, forwardRef } from '../system';

interface AvatarBadgeOptions {
  size: number;
}

export interface AvatarBadgeProps
  extends NativeFicusProps<'View'>,
    AvatarBadgeOptions {}

const AVATAR_BADGE_RATIO = 2.5;

export const AvatarBadge = forwardRef<AvatarBadgeProps, 'View'>(
  (props, ref) => {
    const { size } = props;

    const badgeStyles = useMemo(
      () => ({
        ...props.__styles,
        bg: 'green.400',
        w: size / AVATAR_BADGE_RATIO,
        h: size / AVATAR_BADGE_RATIO,
        borderRadius: '100%',
        borderWidth: 3,
        borderColor: 'white',
        borderStyle: 'solid',
        position: 'absolute',
        top: size - size / AVATAR_BADGE_RATIO,
        ml: size - size / AVATAR_BADGE_RATIO, // not sure why left isn't work here so i used ml instead
      }),
      [props.__styles]
    );

    return <ficus.View {...props} __styles={badgeStyles} ref={ref} />;
  }
);
