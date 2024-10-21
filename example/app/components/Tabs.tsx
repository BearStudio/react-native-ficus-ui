import ExampleSection from '@/src/ExampleSection';
import React, { ReactNode } from 'react';
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Text,
  SafeAreaBox,
  ScrollBox,
} from 'react-native-ficus-ui';

const TabsExampleComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [index2, setIndex2] = React.useState(0);
  const [index3, setIndex3] = React.useState(0);

  // eslint-disable-next-line react/no-unstable-nested-components
  const CustomTabLabel = ({
    focused,
    children,
  }: {
    focused: boolean;
    children: ReactNode;
  }) => (
    <Box bg={focused ? 'teal.600' : 'transparent'} p="md" borderRadius="2xl">
      <Text color={focused ? 'white' : 'teal.500'} fontWeight="bold">
        {children}
      </Text>
    </Box>
  );

  return (
    <SafeAreaBox flex={1}>
      <Text mx="xl" fontSize="4xl">
        Tabs component
      </Text>
      <ScrollBox>
        <ExampleSection name="simple tabs">
          <Box h={200}>
            <Tabs
              initialPage={0}
              onChangeTab={setIndex}
              selectedTab={index}
              bg="white"
              borderRadius="xl"
            >
              <TabList>
                <Tab name="first">Tab 1</Tab>
                <Tab name="second">Tab 2</Tab>
                <Tab name="third">Tab 3</Tab>
              </TabList>
              <TabPanels>
                <TabPanel linkedTo="first" p="lg">
                  <Text>Content for the first tab</Text>
                </TabPanel>
                <TabPanel linkedTo="second" p="lg">
                  <Text>Content for the second tab</Text>
                </TabPanel>
                <TabPanel linkedTo="third" p="lg">
                  <Text>Content for the third tab</Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </ExampleSection>

        <ExampleSection name="custom color">
          <Box h={200}>
            <Tabs
              initialPage={0}
              onChangeTab={setIndex2}
              selectedTab={index2}
              colorScheme="orange"
              bg="white"
              borderRadius="xl"
            >
              <TabList>
                <Tab name="first">Tab 1</Tab>
                <Tab name="second">Tab 2</Tab>
                <Tab name="third">Tab 3</Tab>
              </TabList>
              <TabPanels>
                <TabPanel linkedTo="first" p="lg">
                  <Text>Content for the first tab</Text>
                </TabPanel>
                <TabPanel linkedTo="second" p="lg">
                  <Text>Content for the second tab</Text>
                </TabPanel>
                <TabPanel linkedTo="third" p="lg">
                  <Text>Content for the third tab</Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </ExampleSection>

        <ExampleSection name="custom label">
          <Box h={200}>
            <Tabs
              initialPage={0}
              onChangeTab={setIndex3}
              selectedTab={index3}
              indicatorStyle={{ backgroundColor: 'transparent' }}
              bg="white"
              borderRadius="xl"
            >
              <TabList>
                <Tab name="first">
                  {({ focused }: { focused: boolean }) => (
                    <CustomTabLabel focused={focused}>Tab 1</CustomTabLabel>
                  )}
                </Tab>
                <Tab name="second">
                  {({ focused }: { focused: boolean }) => (
                    <CustomTabLabel focused={focused}>Tab 2</CustomTabLabel>
                  )}
                </Tab>
                <Tab name="third">
                  {({ focused }: { focused: boolean }) => (
                    <CustomTabLabel focused={focused}>Tab 3</CustomTabLabel>
                  )}
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel linkedTo="first" p="lg">
                  <Text>Content for the first tab</Text>
                </TabPanel>
                <TabPanel linkedTo="second" p="lg">
                  <Text>Content for the second tab</Text>
                </TabPanel>
                <TabPanel linkedTo="third" p="lg">
                  <Text>Content for the third tab</Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </ExampleSection>
      </ScrollBox>
    </SafeAreaBox>
  );
};

export default TabsExampleComponent;
