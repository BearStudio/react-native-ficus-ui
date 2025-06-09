import React, { ReactNode } from 'react';
import { Box, Text } from '../../../src/components';

interface ExampleSectionProps {
  name: string;
  withoutSpacingOnContent?: boolean;
  children: ReactNode;
}

const ExampleSection = ({
  name,
  withoutSpacingOnContent,
  children,
}: ExampleSectionProps) => {
  return (
    <Box my="md">
      <Text
        color="gray.500"
        textTransform="uppercase"
        fontSize="lg"
        fontWeight="bold"
        mt="md"
        mb="sm"
        mx="xl"
      >
        {name}
      </Text>

      <Box mx={withoutSpacingOnContent ? 'none' : 'xl'}>{children}</Box>
    </Box>
  );
};

export default ExampleSection;
