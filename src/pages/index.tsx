import Header from 'components/Header';
import Services from 'components/Services';

import { Box, Flex, VStack } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Flex flexDirection="column" w="full" h="full">
      <Header sections={['Serviços', 'Projetos', 'Contato']} />
      <Flex bg="#F3F3F3" height={423} id={'Serviços'}>
        <Services />
      </Flex>
      <Box
        bg="tomato"
        w="100%"
        height={310}
        p={4}
        color="white"
        id={'Projetos'}
      >
        Projetos
      </Box>
      <Box bg="tomato" w="100%" p={4} color="white" id={'Contato'}>
        Contato
      </Box>
    </Flex>
  );
};

export default HomePage;
