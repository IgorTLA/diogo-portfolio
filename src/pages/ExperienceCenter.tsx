import {
  Box,
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

const ExperienceCenter = () => {
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
      <Flex p={'32px 16vw'} flexDirection="column">
        <Image src={language.cover.src} alt={language.title} />
        <Box>
          <Heading as="h3">{language.st1}</Heading>
          <Text>{language.t1}</Text>
        </Box>
        <Box>
          <Heading as="h3">{language.st2}</Heading>
          <Text>{language.t2}</Text>
        </Box>
        <Box>
          <Heading as="h3">{language.st3}</Heading>
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
        </Box>
        <Box>
          <Heading as="h3">{language.st4}</Heading>
          <Text>{language.t4}</Text>
        </Box>
        <Box>
          <Heading as="h3">{language.st5}</Heading>
          <Box>
            <Text as="b">{language.t5.p1.name}</Text>
            <Text>{language.t5.p1.description}</Text>
          </Box>
          <Box>
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
              src={language.t5.p2.description.uxAnalytics.src}
              alt={language.st5}
            />
          </Box>
          <Box>
            <Text as="b">{language.t5.p3.name}</Text>
            <Text>{language.t5.p3.description}</Text>
          </Box>
          <Box>
            <Text as="b">{language.t5.p4.name}</Text>
            <Text>{language.t5.p4.description}</Text>
          </Box>
        </Box>
        <Box>
          <Heading as="h3">{language.st6}</Heading>
          <Box>
            <Text as="b">{language.t6.p1.name}</Text>
            <Text>{language.t6.p1.description}</Text>
            {language.t6.p1.images.map((item) => (
              <Box>
                <Image key={item.id} src={item.image.src} alt={item.title} />
                <Text>{item.title}</Text>
                {item.description && (
                  <Text>
                    <Text as="b">{item.description.t1}</Text>
                    {item.description.t2}
                  </Text>
                )}
              </Box>
            ))}
          </Box>
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
        </Box>
        <Box>
          <Heading as="h3">{language.st7}</Heading>
          <UnorderedList>
            <ListItem>{language.t7.topics.t1}</ListItem>
            <ListItem>{language.t7.topics.t2}</ListItem>
            <ListItem>{language.t7.topics.t3}</ListItem>
            <ListItem>{language.t7.topics.t4}</ListItem>
            <ListItem>{language.t7.topics.t5}</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h3">{language.st8}</Heading>
          <Text>{language.t8.p1}</Text>
          <Text>{language.t8.p2}</Text>
          <Text>{language.t8.p3}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ExperienceCenter;
