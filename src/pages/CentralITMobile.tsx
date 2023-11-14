import {
  Flex,
  Heading,
  Text,
  Image,
  HStack,
  Box,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';
import Header from 'components/Header';
import React, { useEffect, useState } from 'react';

import { centralItMobilePtBr } from 'constants/locale/pt-br';
import { useRouter } from 'next/router';
import { centralItMobileEnUs } from 'constants/locale/en-us';

const CentralITMobile: React.FC = () => {
  const router = useRouter();
  const [language, setLanguage] = useState(centralItMobilePtBr);

  useEffect(() => {
    setLanguage(
      router.locale === 'pt-BR' ? centralItMobilePtBr : centralItMobileEnUs
    );
  }, [router.locale]);

  return (
    <Flex bg="#fff" flexDirection="column" w="full" h="full">
      <Header title={language.title} url="/CentralITMobile" onBack={true} />
      <Flex p={'32px 16vw'} flexDirection="column" gap={8}>
        <Image src={language.cover.src} alt={language.title} />
        <Box>
          <Heading fontSize="30" color="#6B58D6">
            {language.st1}
          </Heading>
          <Text>{language.t1}</Text>
        </Box>
        <Box>
          <Heading fontSize="30" color="#6B58D6">
            {language.st2}
          </Heading>
          <Text>{language.t2}</Text>
        </Box>
        <Flex flexDirection="column" gap={'8px'}>
          <Heading fontSize="30" color="#6B58D6">
            {language.st3}
          </Heading>
          <HStack spacing={1}>
            <Text as="b">{language.t3.p1.name}</Text>
            <Text>{language.t3.p1.description}</Text>
          </HStack>
          <HStack spacing={1}>
            <Text as="b">{language.t3.p2.name}</Text>
            <Text>{language.t3.p2.description}</Text>
          </HStack>
          <HStack spacing={1}>
            <Text as="b">{language.t3.p3.name}</Text>
            <Text>{language.t3.p3.description}</Text>
          </HStack>
          <HStack spacing={1}>
            <Text as="b">{language.t3.p4.name}</Text>
            <Text>{language.t3.p4.description}</Text>
          </HStack>
        </Flex>
        <Box>
          <Heading fontSize="30" color="#6B58D6">
            {language.st4}
          </Heading>
          <Text>{language.t4}</Text>
        </Box>
        <Flex flexDirection="column" gap={'8px'}>
          <Heading fontSize="30" color="#6B58D6">
            {language.st5}
          </Heading>
          <Box>
            <Text as="b">{language.t5.p1.name}</Text>
            <Text>{language.t5.p1.description}</Text>
          </Box>
          <Box>
            <Text as="b">{language.t5.p2.name}</Text>
            <Text>{language.t5.p2.description}</Text>
          </Box>
          <Box>
            <Text as="b">{language.t5.p3.name}</Text>
            <Text>{language.t5.p3.description}</Text>
          </Box>
          <Box>
            <Text as="b">{language.t5.p4.name}</Text>
            <UnorderedList>
              <ListItem>{language.t5.p4.topics.t1}</ListItem>
              <ListItem>{language.t5.p4.topics.t2}</ListItem>
              <ListItem>{language.t5.p4.topics.t3}</ListItem>
              <ListItem>{language.t5.p4.topics.t4}</ListItem>
            </UnorderedList>
            <Image
              alignSelf="center"
              src={language.t5.p4.discover.src}
              alt={language.st5}
            />
          </Box>
          <Box>
            <Text as="b">{language.t5.p5.name}</Text>
            <Text>{language.t5.p5.description}</Text>
            <Text>{language.t5.p6}</Text>
          </Box>
        </Flex>
        <Flex flexDirection="column" gap={'8px'}>
          <Heading fontSize="30" color="#6B58D6">
            {language.st6}
          </Heading>
          <Box>
            <Text as="b">{language.t6.p1.name}</Text>
            <Text>{language.t6.p1.description}</Text>
            <Image
              alignSelf="center"
              src={language.t6.p1.wireframe.src}
              alt={language.t6.p1.name}
            />
          </Box>
          <Box>
            <Text as="b">{language.t6.p2.name}</Text>
            <Text>{language.t6.p2.description}</Text>
          </Box>
          <Box>
            <Text>
              <Text as="b">{language.t6.p3.name}</Text>
              {language.t6.p3.description}
            </Text>
            <Image
              alignSelf="center"
              src={language.t6.p3.usability.src}
              alt={language.t6.p2.name}
            />
          </Box>
          <Box>
            <Text as="b">{language.t6.p4.name}</Text>
            <Text>{language.t6.p4.description}</Text>
            <Image
              alignSelf="center"
              src={language.t6.p4.styleguide.src}
              alt={language.t6.p4.name}
            />
          </Box>
          <Box>
            <Text as="b">{language.t6.p5.name}</Text>
            <Text>{language.t6.p5.description}</Text>
          </Box>
          <Box>
            <Text as="b">{language.t6.p6.name}</Text>
            <Text>{language.t6.p6.description}</Text>
          </Box>
        </Flex>
        <Flex flexDirection="column" gap={'8px'}>
          <Heading fontSize="30" color="#6B58D6">
            {language.st7}
          </Heading>
          <Text>{language.t7}</Text>
        </Flex>
        <Flex flexDirection="column" gap={'8px'}>
          <Heading fontSize="30" color="#6B58D6">
            {language.st8}
          </Heading>
          <Text>{language.t8}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CentralITMobile;
