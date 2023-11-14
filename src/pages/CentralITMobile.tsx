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
import React from 'react';

import { centralItMobilePtBr } from 'constants/locale/pt-br';

const CentralITMobile = () => {
  return (
    <Flex bg="#fff" flexDirection="column" w="full" h="full">
      <Header title={centralItMobilePtBr.title} onBack={true} />
      <Flex p={'32px 16vw'} flexDirection="column">
        <Image
          src={centralItMobilePtBr.cover.src}
          alt={centralItMobilePtBr.title}
        />
        <Box>
          <Heading as="h3">{centralItMobilePtBr.st1}</Heading>
          <Text>{centralItMobilePtBr.t1}</Text>
        </Box>
        <Box>
          <Heading as="h3">{centralItMobilePtBr.st2}</Heading>
          <Text>{centralItMobilePtBr.t2}</Text>
        </Box>
        <Box>
          <Heading as="h3">{centralItMobilePtBr.st3}</Heading>
          <HStack spacing={1}>
            <Text as="b">{centralItMobilePtBr.t3.p1.name}</Text>
            <Text>{centralItMobilePtBr.t3.p1.description}</Text>
          </HStack>
          <HStack spacing={1}>
            <Text as="b">{centralItMobilePtBr.t3.p2.name}</Text>
            <Text>{centralItMobilePtBr.t3.p2.description}</Text>
          </HStack>
          <HStack spacing={1}>
            <Text as="b">{centralItMobilePtBr.t3.p3.name}</Text>
            <Text>{centralItMobilePtBr.t3.p3.description}</Text>
          </HStack>
          <HStack spacing={1}>
            <Text as="b">{centralItMobilePtBr.t3.p4.name}</Text>
            <Text>{centralItMobilePtBr.t3.p4.description}</Text>
          </HStack>
        </Box>
        <Box>
          <Heading as="h3">{centralItMobilePtBr.st4}</Heading>
          <Text>{centralItMobilePtBr.t4}</Text>
        </Box>
        <Box>
          <Heading as="h3">{centralItMobilePtBr.st5}</Heading>
          <Box>
            <Text as="b">{centralItMobilePtBr.t5.p1.name}</Text>
            <Text>{centralItMobilePtBr.t5.p1.description}</Text>
          </Box>
          <Box>
            <Text as="b">{centralItMobilePtBr.t5.p2.name}</Text>
            <Text>{centralItMobilePtBr.t5.p2.description}</Text>
          </Box>
          <Box>
            <Text as="b">{centralItMobilePtBr.t5.p3.name}</Text>
            <Text>{centralItMobilePtBr.t5.p3.description}</Text>
          </Box>
          <Box>
            <Text as="b">{centralItMobilePtBr.t5.p4.name}</Text>
            <UnorderedList>
              <ListItem>{centralItMobilePtBr.t5.p4.topics.t1}</ListItem>
              <ListItem>{centralItMobilePtBr.t5.p4.topics.t2}</ListItem>
              <ListItem>{centralItMobilePtBr.t5.p4.topics.t3}</ListItem>
              <ListItem>{centralItMobilePtBr.t5.p4.topics.t4}</ListItem>
            </UnorderedList>
            <Image
              src={centralItMobilePtBr.t5.p4.discover.src}
              alt={centralItMobilePtBr.st5}
            />
          </Box>
          <Box>
            <Text as="b">{centralItMobilePtBr.t5.p5.name}</Text>
            <Text>{centralItMobilePtBr.t5.p5.description}</Text>
            <Text>{centralItMobilePtBr.t5.p6}</Text>
          </Box>
        </Box>
        <Box>
          <Heading as="h3">{centralItMobilePtBr.st6}</Heading>
          <Box>
            <Text as="b">{centralItMobilePtBr.t6.p1.name}</Text>
            <Text>{centralItMobilePtBr.t6.p1.description}</Text>
            <Image
              src={centralItMobilePtBr.t6.p1.wireframe.src}
              alt={centralItMobilePtBr.t6.p1.name}
            />
          </Box>
          <Box>
            <Text as="b">{centralItMobilePtBr.t6.p2.name}</Text>
            <Text>{centralItMobilePtBr.t6.p2.description}</Text>
          </Box>
          <Box>
            <Text>
              <Text as="b">{centralItMobilePtBr.t6.p3.name}</Text>
              {centralItMobilePtBr.t6.p3.description}
            </Text>
            <Image
              src={centralItMobilePtBr.t6.p3.usability.src}
              alt={centralItMobilePtBr.t6.p2.name}
            />
          </Box>
          <Box>
            <Text as="b">{centralItMobilePtBr.t6.p4.name}</Text>
            <Text>{centralItMobilePtBr.t6.p4.description}</Text>
            <Image
              src={centralItMobilePtBr.t6.p4.styleguide.src}
              alt={centralItMobilePtBr.t6.p4.name}
            />
          </Box>
          <Box>
            <Text as="b">{centralItMobilePtBr.t6.p5.name}</Text>
            <Text>{centralItMobilePtBr.t6.p5.description}</Text>
          </Box>
          <Box>
            <Text as="b">{centralItMobilePtBr.t6.p6.name}</Text>
            <Text>{centralItMobilePtBr.t6.p6.description}</Text>
          </Box>
        </Box>
        <Box>
          <Heading as="h3">{centralItMobilePtBr.st7}</Heading>
          <Text>{centralItMobilePtBr.t7}</Text>
        </Box>
        <Box>
          <Heading as="h3">{centralItMobilePtBr.st8}</Heading>
          <Text>{centralItMobilePtBr.t8}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CentralITMobile;
