import React from 'react';

import { ficus, forwardRef } from '../system';
import { TabPanelProps } from './tabs.type';

export const TabPanel = forwardRef<TabPanelProps, 'View'>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <ficus.View {...rest} ref={ref}>
      {children}
    </ficus.View>
  );
});

TabPanel.displayName = 'TabPanel';
