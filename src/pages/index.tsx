import { Box, Flex, VStack } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Flex w="full" h="full">
      <VStack>
        <Box bg="tomato" w="100%" p={4} color="white">
          This is the Box
        </Box>
        <Box bg="tomato" w="100%" p={4} color="white">
          This is the Box
        </Box>
        <Box bg="tomato" w="100%" p={4} color="white">
          This is the Box
        </Box>
      </VStack>
    </Flex>
  );
};

export default HomePage;
