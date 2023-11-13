import { Flex } from '@chakra-ui/react';
import Header from 'components/Header';
import React from 'react';

const CentralITMobile = () => {
  return (
    <Flex bg="#fff" flexDirection="column" w="full" h="full">
      <Header sections={['Serviços', 'Projetos', 'Contato']} />
    </Flex>
  );
};

export default CentralITMobile;
