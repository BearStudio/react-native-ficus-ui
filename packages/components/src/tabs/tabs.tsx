import React, { ReactNode, useState } from 'react';

import { getThemeColor, theme } from '@ficus-ui/theme';
import { Dimensions, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { SceneMap, TabBar, TabBarProps } from 'react-native-tab-view';
import {
  Scene,
  SceneRendererProps,
} from 'react-native-tab-view/lib/typescript/src/types';

import { type NativeFicusProps, ficus, forwardRef } from '../system';
import { Text } from '../text';
import { TabPanel } from './tabPanel';

interface TabsOptions {
  colorScheme?: string;
  initialPage?: number;
  selectedTab?: number;
  onChangeTab: (index: number) => void;
  children?: ReactNode;
  scrollEnabled?: boolean;
  bounces?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  pressColor?: string;
  pressOpacity?: number;
  onTabPress?: (scene: Scene<any> & Event) => void;
  onTabLongPress?: (scene: Scene<any>) => void;
  tabStyle?: StyleProp<ViewStyle>;
  indicatorStyle?: StyleProp<ViewStyle>;
  indicatorContainerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

export interface TabsProps
  extends Omit<
      NativeFicusProps<'TabView'>,
      'onIndexChange' | 'navigationState' | 'renderScene'
    >,
    TabsOptions {}

export const Tabs = forwardRef<TabsProps, 'View'>(function Tabs(props, ref) {
  const {
    children,
    selectedTab,
    onChangeTab,
    initialPage,
    colorScheme = 'blue',
    ...rest
  } = props;

  const [index, setIndex] = useState(initialPage || 0);

  const tabs = React.Children.toArray(children).find(
    (child: any) => child.type?.displayName === 'TabList'
  ) as any;

  const panels = React.Children.toArray(children).find(
    (child: any) => child.type?.displayName === 'TabPanels'
  ) as any;

  const tabsMainColor = colorScheme
    ? getThemeColor(theme.colors, `${colorScheme}.600`)
    : null;

  const routes = React.Children.map((tabs as any)?.props.children, (child) => ({
    key: child.props.name,
    title: child.props.name,
    renderLabelChildren: child.props.children,
    otherProps: child.props,
  }));

  const tabSceneMap = panels?.props.children.reduce(
    (scenes: any, child: any) => {
      const { linkedTo, children: panelChildren, ...panelRest } = child.props;
      scenes[linkedTo] = () => (
        <TabPanel {...panelRest}>{panelChildren}</TabPanel>
      );
      return scenes;
    },
    {}
  );

  // Construct the scene map from TabPanel children
  const renderScene = SceneMap(tabSceneMap);

  const renderLabel: TabBarProps<any>['renderLabel'] = ({
    route,
    focused,
    color,
  }) => {
    if (typeof route.renderLabelChildren === 'string') {
      return (
        <Text color={tabsMainColor || color}>{route.renderLabelChildren}</Text>
      );
    }
    return (
      <ficus.View>
        {typeof route.renderLabelChildren === 'function'
          ? route.renderLabelChildren({
              route,
              focused,
              color,
            })
          : route.renderLabelChildren}
      </ficus.View>
    );
  };

  const { ...otherTabsProps } = tabs?.props as any;

  return (
    <ficus.TabView
      {...rest}
      navigationState={{
        index: selectedTab !== undefined ? selectedTab : index,
        routes,
      }}
      initialLayout={{ width: Dimensions.get('screen').width }}
      renderScene={renderScene}
      onIndexChange={(ind: any) => {
        onChangeTab(ind);
        setIndex(ind);
      }}
      renderTabBar={(props: SceneRendererProps) => {
        return (
          <TabBar
            renderLabel={renderLabel}
            style={{ backgroundColor: 'white' }}
            {...(colorScheme
              ? { indicatorStyle: { backgroundColor: tabsMainColor } }
              : {})}
            {...props}
            {...otherTabsProps}
            {...rest}
          />
        );
      }}
    />
  );
});
