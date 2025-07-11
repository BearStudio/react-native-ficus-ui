import { Box, Image, SafeAreaBox, Text, useColorModeValue } from 'react-native-ficus-ui';


const ImageComponent = () => {
  return (
    <SafeAreaBox flex={1} bg={useColorModeValue("gray.100", "gray.800")}>
      <Text mx="xl" fontSize="4xl">
        Image component
      </Text>
      <Box mx="xl" mt="lg">
        <Image
          h={200}
          w={300}
          borderRadius={10}
          src='https://www.picturethisai.com/wiki-image/1080/153400456440184865.jpeg'
        />
      </Box>
    </SafeAreaBox>
  );
};

export default ImageComponent;
