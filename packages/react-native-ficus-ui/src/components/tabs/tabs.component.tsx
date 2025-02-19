import React, { FC, ReactNode, useState } from 'react';

import { View, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabBarProps, TabView } from 'react-native-tab-view';

import { useTheme } from '../../theme';
import { getThemeColor } from '../../theme/theme.service';
import { Text } from '../text/text.component';
import { getStyle } from './tabs.style';
import {
  TabListProps,
  TabPanelProps,
  TabPanelsProps,
  TabProps,
  TabsProps,
} from './tabs.type';

const Tab: FC<TabProps> = ({ name, children, ...rest }) => {
  const { theme } = useTheme();
  const styles = getStyle(theme, rest);
  return <View style={styles.box}>{children as ReactNode}</View>;
};
Tab.displayName = 'Tab';

const TabPanels: FC<TabPanelsProps> = ({ children, ...rest }) => {
  const { theme } = useTheme();
  const styles = getStyle(theme, rest);
  return <View style={styles.box}>{children}</View>;
};
TabPanels.displayName = 'TabPanels';

const TabList: FC<TabListProps> = ({ children }) => {
  return <View>{children}</View>;
};
TabList.displayName = 'TabList';

const TabPanel: FC<TabPanelProps> = ({ children, ...rest }) => {
  const { theme } = useTheme();
  const styles = getStyle(theme, rest);
  return <View style={{ ...styles.box, ...styles.tabPanel }}>{children}</View>;
};
TabPanel.displayName = 'TabPanel';

const Tabs: FC<TabsProps> = ({
  children,
  selectedTab,
  onChangeTab,
  initialPage,
  colorScheme = 'blue',
  ...rest
}) => {
  const layout = useWindowDimensions();
  const { theme } = useTheme();
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

  // Construct the routes from Tab children
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
        <Text style={{ color: tabsMainColor || color }}>
          {route.renderLabelChildren}
        </Text>
      );
    }
    return (
      <View>
        {typeof route.renderLabelChildren === 'function'
          ? route.renderLabelChildren({
              route,
              focused,
              color,
            })
          : route.renderLabelChildren}
      </View>
    );
  };

  // Style processing
  const styles = getStyle(theme, rest);
  const { children: tabsChildren, ...otherTabsProps } = tabs?.props as any;
  const { children: panelsChildren, ...otherPanelsProps } =
    panels?.props as any;

  const panelsStyles = getStyle(theme, otherPanelsProps);
  const tabBarStyle = getStyle(theme, otherTabsProps);

  return (
    <TabView
      {...rest}
      navigationState={{
        index: selectedTab !== undefined ? selectedTab : index,
        routes,
      }}
      initialLayout={{ width: layout.width }}
      sceneContainerStyle={panelsStyles.box}
      renderScene={renderScene}
      onIndexChange={(ind) => {
        onChangeTab(ind);
        setIndex(ind);
      }}
      renderTabBar={(props) => {
        return (
          <TabBar
            renderLabel={renderLabel}
            style={tabBarStyle.box}
            {...(colorScheme
              ? { indicatorStyle: { backgroundColor: tabsMainColor } }
              : {})}
            {...props}
            {...otherTabsProps}
            {...rest}
          />
        );
      }}
      style={styles.box}
    />
  );
};

export { Tabs, TabList, Tab, TabPanel, TabPanels };
