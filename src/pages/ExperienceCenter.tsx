import {
  Box,
  Card,
  Flex,
  HStack,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList
} from '@chakra-ui/react';
import Header from 'components/Header';
import React, { useEffect, useState } from 'react';

import { experienceCenterPtBr } from 'constants/locale/pt-br';
import { useRouter } from 'next/router';
import { experienceCenterEnUs } from 'constants/locale/en-us';

const ExperienceCenter: React.FC = () => {
  const router = useRouter();
  const [language, setLanguage] = useState(experienceCenterPtBr);

  useEffect(() => {
    setLanguage(
      router.locale === 'pt-BR' ? experienceCenterPtBr : experienceCenterEnUs
    );
  }, [router.locale]);
  return (
    <Flex bg="#fff" flexDirection="column" w="full" h="full">
      <Header title={language.title} url="/ExperienceCenter" onBack={true} />
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
          <Flex flexDirection="column" gap={'8px'}>
            <Text as="b">{language.t5.p2.name}</Text>
            <Text>{language.t5.p2.description.t1}</Text>
            <Text>{language.t5.p2.description.t2}</Text>
            <UnorderedList>
              <ListItem>{language.t5.p2.description.topics.t1}</ListItem>
              <ListItem>{language.t5.p2.description.topics.t2}</ListItem>
              <ListItem>{language.t5.p2.description.topics.t3}</ListItem>
              <ListItem>{language.t5.p2.description.topics.t4}</ListItem>
            </UnorderedList>
            <Image
              alignSelf="center"
              src={language.t5.p2.description.uxAnalytics.src}
              alt={language.st5}
            />
          </Flex>
          <Box>
            <Text as="b">{language.t5.p3.name}</Text>
            <Text>{language.t5.p3.description}</Text>
          </Box>
          <Box>
            <Text as="b">{language.t5.p4.name}</Text>
            <Text>{language.t5.p4.description}</Text>
          </Box>
        </Flex>
        <Flex flexDirection="column" gap={'8px'}>
          <Heading fontSize="30" color="#6B58D6">
            {language.st6}
          </Heading>
          <Flex flexDirection="column" gap={'16px'}>
            <Text as="b">{language.t6.p1.name}</Text>
            <Text>{language.t6.p1.description}</Text>
            {language.t6.p1.images.map((item) => (
              <Card
                key={item.id}
                direction="column"
                overflow="hidden"
                variant="outline"
                bg="#fff"
                align="center"
                padding={8}
                gap={'8px'}
                boxShadow="0px 2px 16px rgba(0, 0, 0, 0.1)"
              >
                <Image
                  alignSelf="center"
                  src={item.image.src}
                  alt={item.title}
                />
                <Text fontSize="20px" fontWeight="700">
                  {item.title}
                </Text>
                {item.description && (
                  <Text>
                    <Text as="b">{item.description.t1}</Text>
                    {item.description.t2}
                  </Text>
                )}
              </Card>
            ))}
          </Flex>
          <Box>
            <Text as="b">{language.t6.p2.name}</Text>
            <Text>{language.t6.p2.description}</Text>
          </Box>
          <Box>
            <Text as="b">{language.t6.p3.name}</Text>
            <Text>{language.t6.p3.description}</Text>
          </Box>
          <Box>
            <Text as="b">{language.t6.p4.name}</Text>
            <Text>{language.t6.p4.description}</Text>
          </Box>
          <Box>
            <Text as="b">{language.t6.p5.name}</Text>
            <Text>{language.t6.p5.description}</Text>
          </Box>
        </Flex>
        <Flex flexDirection="column" gap={'8px'}>
          <Heading fontSize="30" color="#6B58D6">
            {language.st7}
          </Heading>
          <UnorderedList>
            <ListItem>{language.t7.topics.t1}</ListItem>
            <ListItem>{language.t7.topics.t2}</ListItem>
            <ListItem>{language.t7.topics.t3}</ListItem>
            <ListItem>{language.t7.topics.t4}</ListItem>
            <ListItem>{language.t7.topics.t5}</ListItem>
          </UnorderedList>
        </Flex>
        <Flex flexDirection="column" gap={'8px'}>
          <Heading fontSize="30" color="#6B58D6">
            {language.st8}
          </Heading>
          <Text>{language.t8.p1}</Text>
          <Text>{language.t8.p2}</Text>
          <Text>{language.t8.p3}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ExperienceCenter;
