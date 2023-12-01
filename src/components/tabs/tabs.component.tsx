// tabs.component.tsx
import React, { FC, ReactNode, useState } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { TabView, SceneMap, TabBar, TabBarProps } from 'react-native-tab-view';
import { useTheme } from '../../theme';
import { getStyle } from './tabs.style';
import {
  TabListProps,
  TabPanelProps,
  TabPanelsProps,
  TabProps,
  TabsProps,
} from './tabs.type';
import { Text } from '../text/text.component';

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
      return <Text style={{ color }}>{route.renderLabelChildren}</Text>;
    }
    const renderLabelStyle = getStyle(theme, route.otherProps);

    return (
      <View style={{ ...styles.box, ...renderLabelStyle.box }}>
        {typeof route.renderLabelChildren === 'function'
          ? route.renderLabelChildren({ route, focused, color })
          : route.renderLabelChildren}
      </View>
    );
  };

  // Style processing
  const styles = getStyle(theme, rest);
  const { children: tabsChildren, ...otherTabsProps } = tabs?.props as any;
  const {
    children: panelsChildren,
    ...otherPanelsProps
  } = panels?.props as any;
  const panelsStyles = getStyle(theme, otherPanelsProps);

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
      renderTabBar={(prop) => {
        return (
          <TabBar
            {...prop}
            onTabPress={({ route, preventDefault }) => {
              preventDefault();
              prop.jumpTo(route.key);
            }}
            renderLabel={renderLabel}
            {...otherTabsProps}
          />
        );
      }}
      style={styles.box}
    />
  );
};

export { Tabs, TabList, Tab, TabPanel, TabPanels };
