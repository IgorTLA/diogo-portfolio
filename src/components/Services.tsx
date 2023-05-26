import {
  InteractivePrototype,
  UIDesign,
  UXAnalytics,
  UXResearch,
  UsabilityTests
} from './MyIcons';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const services = [
  {
    icon: <UXResearch boxSize="60px" color="#335CD7" />,
    title: 'UX Research'
  },
  {
    icon: <UXAnalytics boxSize="60px" color="#335CD7" />,
    title: 'UX Analytics'
  },
  {
    icon: <UIDesign boxSize="60px" color="#335CD7" />,
    title: 'UI Design'
  },
  {
    icon: <InteractivePrototype boxSize="60px" color="#335CD7" />,
    title: 'Protótipos Interativos'
  },
  {
    icon: <UsabilityTests boxSize="60px" color="#335CD7" />,
    title: 'Testes de Usabilidade'
  }
];

const Services = () => {
  return (
    <Flex
      w="100%"
      height={310}
      p="0 100px 24px"
      color="white"
      align="center"
      flexDirection="column"
      gap="40px"
    >
      <Heading flexDirection="row" color="#000" fontSize="40">
        Meus{' '}
        <Box as="span" color="#335CD7">
          {' '}
          serviços{' '}
        </Box>{' '}
        para ajudar{' '}
        <Box as="span" color="#335CD7">
          sua empresa
        </Box>
      </Heading>
      <Flex
        // w="fit-content"
        // h="fit-content"
        align="center"
        justifyContent="space-between"
        flexDirection="row"
        gap="16px"
      >
        {services.map((service, index) => (
          <Flex
            key={index}
            h="204px"
            p="32px"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            boxShadow="0px 2px 16px #0000001a"
          >
            {service.icon}
            <Text
              w="172px"
              textAlign="center"
              color="#000"
              lineHeight="28px"
              fontSize="24"
              fontWeight="bold"
            >
              {service.title}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Services;
