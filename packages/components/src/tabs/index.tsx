import React, { ReactNode, useState } from 'react';

import { Dict, splitProps } from '@chakra-ui/utils';
import { Dimensions } from 'react-native';
import {
  ResponsiveValue,
  isStyleProp,
} from 'react-native-ficus-ui/style-system';
import { useTheme } from 'react-native-ficus-ui/theme';
import { SceneMap, TabBar, TabBarProps } from 'react-native-tab-view';
import { Props as RNTabBarProps } from 'react-native-tab-view/lib/typescript/src/TabBar';
import {
  Route,
  SceneRendererProps,
} from 'react-native-tab-view/lib/typescript/src/types';

import {
  type NativeFicusProps,
  ficus,
  toStyleSheetObject,
  useStyleConfig,
} from '../system';
import { Text } from '../text';

interface TabsOptions {
  colorScheme?: string;
  initialPage?: number;
  selectedTab?: number;
  onChangeTab: (index: number) => void;
  children?: ReactNode;
}

// [FIXME]: There is probably a way to abstract the style handling more generally.
export interface TabsProps
  extends Omit<
      NativeFicusProps<'TabView'>,
      'onIndexChange' | 'navigationState' | 'renderScene'
    >,
    TabsOptions {}

export const Tabs = (props: TabsProps) => {
  const {
    children,
    selectedTab,
    onChangeTab,
    initialPage,
    colorScheme = 'blue',
    ...rest
  } = props;

  const { theme } = useTheme();

  const [stylesProps, tabsProps] = splitProps(props as Dict, isStyleProp);

  const styles = useStyleConfig('Tabs', {
    ...stylesProps,
    variant: tabsProps?.variant as ResponsiveValue<string>,
  });

  const [index, setIndex] = useState(initialPage || 0);

  const tabs = React.Children.toArray(children).find(
    (child: any) => child.type === TabList
  ) as any;

  const panels = React.Children.toArray(children).find(
    (child: any) => child.type === TabPanels
  ) as any;

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

  const tabsMainColor = colorScheme ? `${colorScheme}.600` : null;

  const tabListStyles = useStyleConfig('TabList', {
    ...tabs.props,
    variant: tabsProps?.variant as ResponsiveValue<string>,
  });

  const tabListStyleObject = toStyleSheetObject({ baseStyle: tabListStyles })({
    ...tabListStyles,
    ...(tabsMainColor
      ? { indicatorStyle: { backgroundColor: tabsMainColor } }
      : {}),
    theme,
    style: undefined,
  });

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
      renderTabBar={(sceneProps: SceneRendererProps) => {
        return (
          <TabBar
            renderLabel={renderLabel}
            style={tabListStyleObject}
            {...(tabListStyleObject?.indicatorStyle
              ? { indicatorStyle: tabListStyleObject?.indicatorStyle }
              : {})}
            {...tabs?.props}
            {...sceneProps}
            {...rest}
          />
        );
      }}
      __styles={styles}
    />
  );
};

export interface TabProps extends Omit<NativeFicusProps<'View'>, 'children'> {
  name?: string;
  children: ReactNode | string | TabBarProps<any>['renderLabel'];
}
export const Tab = (props: TabProps) => <ficus.View {...props} />;

export interface TabListProps
  extends NativeFicusProps<'View'>,
    Omit<
      RNTabBarProps<Route>,
      'gap' | 'position' | 'navigationState' | 'layout' | 'jumpTo'
    > {}

export const TabList = (props: TabListProps) => <ficus.View {...props} />;

export interface TabPanelProps extends NativeFicusProps<'View'> {
  linkedTo?: string;
}
export const TabPanel = (props: TabPanelProps) => <ficus.View {...props} />;

export const TabPanels = ficus('View');
