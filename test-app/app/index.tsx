import { SafeAreaView, ScrollView } from 'react-native';
import { Box, Text } from 'react-native-ficus-ui';
import { components } from '../constants/components';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Box flex={1}>
          {/* list */}
          <ScrollView>
            <Box mt="xl" px="xl">
              <Text pb="lg" fontSize="3xl">
                Components
              </Text>
              <Box flexDir="row">
                {components.map((item) => (
                  <Link href={`/components/${item.navigationPath}`}>
                    <Text fontSize="xl">{item.onScreenName}</Text>
                  </Link>
                ))}
              </Box>
            </Box>
          </ScrollView>
        </Box>
      </SafeAreaView>
    </>
  );
}
