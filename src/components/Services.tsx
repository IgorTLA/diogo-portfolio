import {
  InteractivePrototype,
  UIDesign,
  UXAnalytics,
  UXResearch,
  UsabilityTests
} from './MyIcons';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { servicesEnUs } from 'constants/locale/en-us';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { servicesPtBr } from '../constants/locale/pt-br';

const Services = () => {
  const router = useRouter();
  const [language, setLanguage] = useState(servicesPtBr);

  useEffect(() => {
    setLanguage(router.locale === 'pt-BR' ? servicesPtBr : servicesEnUs);
  }, [router.locale]);

  const services = [
    {
      icon: <UXResearch boxSize="60px" color="#335CD7" />,
      title: language.card.t1
    },
    {
      icon: <UXAnalytics boxSize="60px" color="#335CD7" />,
      title: language.card.t2
    },
    {
      icon: <UIDesign boxSize="60px" color="#335CD7" />,
      title: language.card.t3
    },
    {
      icon: <InteractivePrototype boxSize="60px" color="#335CD7" />,
      title: language.card.t4
    },
    {
      icon: <UsabilityTests boxSize="60px" color="#335CD7" />,
      title: language.card.t5
    }
  ];

  return (
    <Flex
      w="100%"
      height="hug"
      p="0 100px 24px"
      color="white"
      align="center"
      flexDirection="column"
      gap="40px"
    >
      <Heading flexDirection="row" color="#000" fontSize="40">
        {language.title.t1}{' '}
        <Box as="span" color="#335CD7">
          {' '}
          {language.title.t2}{' '}
        </Box>{' '}
        {language.title.t3}{' '}
        <Box as="span" color="#335CD7">
          {language.title.t4}
        </Box>
      </Heading>
      <Flex
        wrap="wrap"
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
