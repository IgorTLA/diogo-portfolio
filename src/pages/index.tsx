import AboutMe from 'components/AboutMe';
import Header from 'components/Header';
import Projects from 'components/Projects';
import Services from 'components/Services';

import { Box, Flex } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Flex bg="#fff" flexDirection="column" w="full" h="full">
      <Header sections={['Serviços', 'Projetos', 'Contato']} />
      <Flex id={'AboutMe'}>
        <AboutMe />
      </Flex>
      <Flex id={'Serviços'}>
        <Services />
      </Flex>
      <Box id={'Projetos'}>
        <Projects />
      </Box>
      <Box bg="tomato" w="100%" p={4} color="white" id={'Contato'}>
        Contato
      </Box>
    </Flex>
  );
};

export default HomePage;
