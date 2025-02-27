import React from 'react';

import { render } from '@testing-library/react-native';

import { Text } from '../text';
import { Tab } from './tab';
import { TabList } from './tabList';
import { TabPanel } from './tabPanel';
import { TabPanels } from './tabPanels';
import { Tabs } from './tabs';

describe('Tabs Component', () => {
  it('displays the correct tab content', () => {
    const { getByText } = render(
      <Tabs initialPage={0} onChangeTab={() => {}}>
        <TabList>
          <Tab name="first">Tab 1</Tab>
          <Tab name="second">Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel linkedTo="first">
            <Text>Content 1</Text>
          </TabPanel>
          <TabPanel linkedTo="second">
            <Text>Content 2</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    );

    expect(getByText('Content 1')).toBeTruthy();
  });
});
