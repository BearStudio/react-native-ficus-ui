// tabs.type.tsx
import { ReactNode } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import type {
  TabViewProps as RNTabViewProps,
  Route,
  SceneRendererProps,
} from 'react-native-tab-view';
import type {
  BorderPropsType,
  SpacingPropsType,
  BorderRadiusPropsType,
  ShadowPropsType,
  DimensionPropsType,
  BackgroundPropsType,
  FlexPropsType,
  PositionPropsType,
  ZIndexPropsType,
  OverflowPropsType,
  OpacityPropsType,
  VariantPropsType,
} from '../../types';

// Define a type that includes all common style props and additional ones needed for your components
type CommonStyleProps = BorderPropsType &
  SpacingPropsType &
  BorderRadiusPropsType &
  ShadowPropsType &
  DimensionPropsType &
  BackgroundPropsType &
  FlexPropsType &
  PositionPropsType &
  ZIndexPropsType &
  OverflowPropsType &
  OpacityPropsType &
  VariantPropsType;

// Extend CommonStyleProps with specific props for each component
export interface TabsProps<T extends Route = Route>
  extends CommonStyleProps,
    Omit<
      RNTabViewProps<T>,
      | 'navigationState'
      | 'initialLayout'
      | 'onIndexChange'
      | 'sceneContainerStyle'
      | 'renderScene'
      | 'renderTabBar'
    > {
  children: ReactNode;
  initialPage?: number;
  selectedTab?: number;
  onChangeTab: (index: number) => void;
}

export interface TabListProps extends CommonStyleProps {
  children: ReactNode;
  // Removed onTabPress and selectedIndex as they are not used in the component
}

export interface TabPanelProps extends CommonStyleProps {
  children: ReactNode;
  // Additional props can be added if needed
}

// Define a type for children that can be a function
type TabChildrenFunction = (params: {
  focused: boolean;
  color?: string;
  route?: Route;
}) => ReactNode;

// Update the TabProps to accept all three cases
export interface TabProps extends CommonStyleProps {
  name: string;
  children: ReactNode | string | TabChildrenFunction;
}

export interface TabPanelsProps extends CommonStyleProps {
  children: ReactNode;
}

// Define a type for the renderLabel function if needed
export type RenderLabelProps = SceneRendererProps & {
  route: Route;
};

// Define style types for the components
export type TabViewStyle = ViewStyle & {
  tabPanel?: ViewStyle;
  tabsStyle?: ViewStyle;
  tabLabel?: TextStyle;
  activeTab?: ViewStyle;
  activeTabLabel?: TextStyle;
  tabContentContainer?: ViewStyle;
};
