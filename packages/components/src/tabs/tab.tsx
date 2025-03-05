import React, { ReactNode } from 'react';

import { ficus, forwardRef } from '../system';
import { TabProps } from './tabs.type';

export const Tab = forwardRef<TabProps, 'View'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <ficus.View {...rest} ref={ref}>
      {children as ReactNode}
    </ficus.View>
  );
});

Tab.displayName = 'Tab';
