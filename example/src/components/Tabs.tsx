import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Text,
} from 'react-native-ficus-ui';

const TabsExampleComponent = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
      <Tabs initialPage={0} onChangeTab={setIndex} selectedTab={index} mt="md">
        <TabList>
          <Tab name="first">
            {({ focused }) => (
              <Text color={focused ? 'red.500' : 'black'}>Tab 1</Text>
            )}
          </Tab>
          <Tab name="second">
            <Text>Tab 2</Text>
          </Tab>
          <Tab name="third">Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel linkedTo="first" bg="red.800">
            <Text color="red.600">Content for the first tab</Text>
          </TabPanel>
          <TabPanel linkedTo="second" bg="gray.600">
            <Text>Content for the second tab</Text>
          </TabPanel>
          <TabPanel linkedTo="third" bg="yellow.400">
            <Text>Content for the third tab</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsExampleComponent;
