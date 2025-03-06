import { useMemo } from 'react';

import { NativeFicusProps, ficus, forwardRef } from '../system';

export interface AvatarBadgeProps extends NativeFicusProps<'View'> {}

export const AvatarBadge = forwardRef<AvatarBadgeProps, 'View'>((props) => {
  const { __styles } = props;

  const badgeStyles = useMemo(
    () => ({
      position: 'absolute',
      ...__styles,
    }),
    [__styles]
  );

  return <ficus.View {...props} __styles={badgeStyles} />;
});
