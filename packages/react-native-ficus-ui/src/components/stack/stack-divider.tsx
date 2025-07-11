import { useMemo } from 'react';

import { ficus, forwardRef } from '../system';
import { StackProps } from './stack';

export const StackDivider = forwardRef<StackProps, 'View'>((props, ref) => {
  const dividerStyles = useMemo(
    () => ({
      ...props.__styles,
      borderWidth: 1,
      alignSelf: 'stretch',
      borderColor: 'inherit',
      width: 'auto',
      height: 'auto',
    }),
    [props.__styles]
  );

  return <ficus.View {...props} __styles={dividerStyles} ref={ref} />;
});
