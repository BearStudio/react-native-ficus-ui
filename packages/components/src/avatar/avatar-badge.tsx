import { useMemo } from 'react';

import { NativeFicusProps, ficus, forwardRef } from '../system';

export interface AvatarBadgeProps extends NativeFicusProps<'View'> {}

export const AvatarBadge = forwardRef<AvatarBadgeProps, 'View'>(
  (props, ref) => {
    const { __styles } = props;

    const badgeStyles = useMemo(
      () => ({
        position: 'absolute',
        ...__styles,
      }),
      [__styles]
    );

    return <ficus.View ref={ref} {...props} __styles={badgeStyles} />;
  }
);
