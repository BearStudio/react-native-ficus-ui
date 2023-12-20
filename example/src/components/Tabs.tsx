import React from 'react';
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Text,
  SafeAreaBox,
} from 'react-native-ficus-ui';

const TabsExampleComponent = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaBox flex={1}>
      <Tabs
        colorScheme="green"
        initialPage={0}
        onChangeTab={setIndex}
        selectedTab={index}
      >
        <TabList>
          <Tab name="first">Tab 1</Tab>
          <Tab name="second">Tab 2</Tab>
          <Tab name="third">Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel linkedTo="first" bg="red.800" p="lg">
            <Text color="white">Content for the first tab</Text>
          </TabPanel>
          <TabPanel linkedTo="second" bg="gray.600" p="lg">
            <Text color="white">Content for the second tab</Text>
          </TabPanel>
          <TabPanel linkedTo="third" bg="yellow.400" p="lg">
            <Text>Content for the third tab</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </SafeAreaBox>
  );
};

export default TabsExampleComponent;
