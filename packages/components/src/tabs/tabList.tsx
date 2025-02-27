import { forwardRef, ficus } from '../system';
import { TabListProps } from './tabs.type';
import React from 'react';

export const TabList = forwardRef<TabListProps, 'View'>((props, ref) => {
    const { children, ...rest } = (props);
    return (
        <ficus.View {...rest} ref={ref}>
            {children}
        </ficus.View>
    )
});

TabList.displayName = 'TabList';