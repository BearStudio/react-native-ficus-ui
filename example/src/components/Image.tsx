import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box, Image, Text } from 'react-native-ficus-ui';

const ImageComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text mx="xl" fontSize="4xl">
        Image component
      </Text>
      <Box mx="xl" mt="lg">
        <Image
          h={200}
          w={300}
          borderRadius={10}
          source={{
            uri:
              'https://www.picturethisai.com/wiki-image/1080/153400456440184865.jpeg',
          }}
        />
      </Box>
    </SafeAreaView>
  );
};

export default ImageComponent;
