import { forwardRef, ficus } from '../system';
import { TabPanelsProps } from './tabs.type';
import React from 'react';

export const TabPanels = forwardRef<TabPanelsProps, 'View'>((props, ref) => {
    const { children, ...rest } = (props);
    return (
        <ficus.View {...rest} ref={ref}>
            {children}
        </ficus.View>
    )
});

TabPanels.displayName = 'TabPanels';