import { ReactNode } from 'react';

import type { Route, SceneRendererProps } from 'react-native-tab-view';

import { type NativeFicusProps } from '../system';

type TabChildrenFunction = (params: {
  focused: boolean;
  color?: string;
  route?: Route;
}) => ReactNode;

export interface TabListProps extends NativeFicusProps<'View'> {
  // Removed onTabPress and selectedIndex as they are not used in the component
}

export interface TabPanelProps extends NativeFicusProps<'View'> {
  linkedTo?: string;
  // Additional props can be added if needed
}

// Update the TabProps to accept all three cases
export interface TabProps extends Omit<NativeFicusProps<'View'>, 'children'> {
  name: string;
  children: ReactNode | string | TabChildrenFunction;
}

export interface TabPanelsProps extends NativeFicusProps<'View'> {}

// Define a type for the renderLabel function if needed
export type RenderLabelProps = SceneRendererProps & {
  route: Route;
};
