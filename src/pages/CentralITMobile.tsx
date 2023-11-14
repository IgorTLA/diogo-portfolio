import {
  Flex,
  Heading,
  Text,
  Image,
  HStack,
  Box,
  UnorderedList,
  ListItem,
  VStack
} from '@chakra-ui/react';
import Header from 'components/Header';
import React from 'react';

import { centralItMobile } from 'constants/locale/pt-br';

const CentralITMobile = () => {
  return (
    <Flex bg="#fff" flexDirection="column" w="full" h="full">
      <Header title={centralItMobile.title} onBack={true} />
      <Flex p={'32px 16vw'} flexDirection="column">
        <Image src={centralItMobile.cover.src} alt={centralItMobile.title} />
        <Box>
          <Heading as="h3">{centralItMobile.st1}</Heading>
          <Text>{centralItMobile.t1}</Text>
        </Box>
        <Box>
          <Heading as="h3">{centralItMobile.st2}</Heading>
          <Text>{centralItMobile.t2}</Text>
        </Box>
        <Box>
          <Heading as="h3">{centralItMobile.st3}</Heading>
          <HStack spacing={1}>
            <Text as="b">{centralItMobile.t3.p1.name}</Text>
            <Text>{centralItMobile.t3.p1.description}</Text>
          </HStack>
          <HStack spacing={1}>
            <Text as="b">{centralItMobile.t3.p2.name}</Text>
            <Text>{centralItMobile.t3.p2.description}</Text>
          </HStack>
          <HStack spacing={1}>
            <Text as="b">{centralItMobile.t3.p3.name}</Text>
            <Text>{centralItMobile.t3.p3.description}</Text>
          </HStack>
          <HStack spacing={1}>
            <Text as="b">{centralItMobile.t3.p4.name}</Text>
            <Text>{centralItMobile.t3.p4.description}</Text>
          </HStack>
        </Box>
        <Box>
          <Heading as="h3">{centralItMobile.st4}</Heading>
          <Text>{centralItMobile.t4}</Text>
        </Box>
        <Box>
          <Heading as="h3">{centralItMobile.st5}</Heading>
          <Box>
            <Text as="b">{centralItMobile.t5.p1.name}</Text>
            <Text>{centralItMobile.t5.p1.description}</Text>
          </Box>
          <Box>
            <Text as="b">{centralItMobile.t5.p2.name}</Text>
            <Text>{centralItMobile.t5.p2.description}</Text>
          </Box>
          <Box>
            <Text as="b">{centralItMobile.t5.p3.name}</Text>
            <Text>{centralItMobile.t5.p3.description}</Text>
          </Box>
          <Box>
            <Text as="b">{centralItMobile.t5.p4.name}</Text>
            <UnorderedList>
              <ListItem>{centralItMobile.t5.p4.topics.t1}</ListItem>
              <ListItem>{centralItMobile.t5.p4.topics.t2}</ListItem>
              <ListItem>{centralItMobile.t5.p4.topics.t3}</ListItem>
              <ListItem>{centralItMobile.t5.p4.topics.t4}</ListItem>
            </UnorderedList>
            <Image
              src={centralItMobile.t5.p4.discover.src}
              alt={centralItMobile.st5}
            />
          </Box>
          <Box>
            <Text as="b">{centralItMobile.t5.p5.name}</Text>
            <Text>{centralItMobile.t5.p5.description}</Text>
            <Text>{centralItMobile.t5.p6}</Text>
          </Box>
        </Box>
        <Box>
          <Heading as="h3">{centralItMobile.st6}</Heading>
          <Box>
            <Text as="b">{centralItMobile.t6.p1.name}</Text>
            <Text>{centralItMobile.t6.p1.description}</Text>
            <Image
              src={centralItMobile.t6.p1.wireframe.src}
              alt={centralItMobile.t6.p1.name}
            />
          </Box>
          <Box>
            <Text as="b">{centralItMobile.t6.p2.name}</Text>
            <Text>{centralItMobile.t6.p2.description}</Text>
          </Box>
          <Box>
            <Text>
              <Text as="b">{centralItMobile.t6.p3.name}</Text>
              {centralItMobile.t6.p3.description}
            </Text>
            <Image
              src={centralItMobile.t6.p3.usability.src}
              alt={centralItMobile.t6.p2.name}
            />
          </Box>
          <Box>
            <Text as="b">{centralItMobile.t6.p4.name}</Text>
            <Text>{centralItMobile.t6.p4.description}</Text>
            <Image
              src={centralItMobile.t6.p4.styleguide.src}
              alt={centralItMobile.t6.p4.name}
            />
          </Box>
          <Box>
            <Text as="b">{centralItMobile.t6.p5.name}</Text>
            <Text>{centralItMobile.t6.p5.description}</Text>
          </Box>
          <Box>
            <Text as="b">{centralItMobile.t6.p6.name}</Text>
            <Text>{centralItMobile.t6.p6.description}</Text>
          </Box>
        </Box>
        <Box>
          <Heading as="h3">{centralItMobile.st7}</Heading>
          <Text>{centralItMobile.t7}</Text>
        </Box>
        <Box>
          <Heading as="h3">{centralItMobile.st8}</Heading>
          <Text>{centralItMobile.t8}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CentralITMobile;
