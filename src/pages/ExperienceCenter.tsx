import { Flex } from '@chakra-ui/react';
import Header from 'components/Header';
import React from 'react';

const ExperienceCenter = () => {
  return (
    <Flex bg="#fff" flexDirection="column" w="full" h="full">
      <Header title="Centro de Experiência" onBack={true} />
    </Flex>
  );
};

export default ExperienceCenter;
