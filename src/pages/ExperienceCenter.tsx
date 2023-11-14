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
import React from 'react';

import { experienceCenterPtBr } from 'constants/locale/pt-br';

const ExperienceCenter = () => {
  return (
    <Flex bg="#fff" flexDirection="column" w="full" h="full">
      <Header title={experienceCenterPtBr.title} onBack={true} />
      <Flex p={'32px 16vw'} flexDirection="column">
        <Image
          src={experienceCenterPtBr.cover.src}
          alt={experienceCenterPtBr.title}
        />
        <Box>
          <Heading as="h3">{experienceCenterPtBr.st1}</Heading>
          <Text>{experienceCenterPtBr.t1}</Text>
        </Box>
        <Box>
          <Heading as="h3">{experienceCenterPtBr.st2}</Heading>
          <Text>{experienceCenterPtBr.t2}</Text>
        </Box>
        <Box>
          <Heading as="h3">{experienceCenterPtBr.st3}</Heading>
          <HStack spacing={1}>
            <Text as="b">{experienceCenterPtBr.t3.p1.name}</Text>
            <Text>{experienceCenterPtBr.t3.p1.description}</Text>
          </HStack>
          <HStack spacing={1}>
            <Text as="b">{experienceCenterPtBr.t3.p2.name}</Text>
            <Text>{experienceCenterPtBr.t3.p2.description}</Text>
          </HStack>
          <HStack spacing={1}>
            <Text as="b">{experienceCenterPtBr.t3.p3.name}</Text>
            <Text>{experienceCenterPtBr.t3.p3.description}</Text>
          </HStack>
        </Box>
        <Box>
          <Heading as="h3">{experienceCenterPtBr.st4}</Heading>
          <Text>{experienceCenterPtBr.t4}</Text>
        </Box>
        <Box>
          <Heading as="h3">{experienceCenterPtBr.st5}</Heading>
          <Box>
            <Text as="b">{experienceCenterPtBr.t5.p1.name}</Text>
            <Text>{experienceCenterPtBr.t5.p1.description}</Text>
          </Box>
          <Box>
            <Text as="b">{experienceCenterPtBr.t5.p2.name}</Text>
            <Text>{experienceCenterPtBr.t5.p2.description.t1}</Text>
            <Text>{experienceCenterPtBr.t5.p2.description.t2}</Text>
            <UnorderedList>
              <ListItem>
                {experienceCenterPtBr.t5.p2.description.topics.t1}
              </ListItem>
              <ListItem>
                {experienceCenterPtBr.t5.p2.description.topics.t2}
              </ListItem>
              <ListItem>
                {experienceCenterPtBr.t5.p2.description.topics.t3}
              </ListItem>
              <ListItem>
                {experienceCenterPtBr.t5.p2.description.topics.t4}
              </ListItem>
            </UnorderedList>
            <Image
              src={experienceCenterPtBr.t5.p2.description.uxAnalytics.src}
              alt={experienceCenterPtBr.st5}
            />
          </Box>
          <Box>
            <Text as="b">{experienceCenterPtBr.t5.p3.name}</Text>
            <Text>{experienceCenterPtBr.t5.p3.description}</Text>
          </Box>
          <Box>
            <Text as="b">{experienceCenterPtBr.t5.p4.name}</Text>
            <Text>{experienceCenterPtBr.t5.p4.description}</Text>
          </Box>
        </Box>
        <Box>
          <Heading as="h3">{experienceCenterPtBr.st6}</Heading>
          <Box>
            <Text as="b">{experienceCenterPtBr.t6.p1.name}</Text>
            <Text>{experienceCenterPtBr.t6.p1.description}</Text>
            {experienceCenterPtBr.t6.p1.images.map((item) => (
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
            <Text as="b">{experienceCenterPtBr.t6.p2.name}</Text>
            <Text>{experienceCenterPtBr.t6.p2.description}</Text>
          </Box>
          <Box>
            <Text as="b">{experienceCenterPtBr.t6.p3.name}</Text>
            <Text>{experienceCenterPtBr.t6.p3.description}</Text>
          </Box>
          <Box>
            <Text as="b">{experienceCenterPtBr.t6.p4.name}</Text>
            <Text>{experienceCenterPtBr.t6.p4.description}</Text>
          </Box>
          <Box>
            <Text as="b">{experienceCenterPtBr.t6.p5.name}</Text>
            <Text>{experienceCenterPtBr.t6.p5.description}</Text>
          </Box>
        </Box>
        <Box>
          <Heading as="h3">{experienceCenterPtBr.st7}</Heading>
          <UnorderedList>
            <ListItem>{experienceCenterPtBr.t7.topics.t1}</ListItem>
            <ListItem>{experienceCenterPtBr.t7.topics.t2}</ListItem>
            <ListItem>{experienceCenterPtBr.t7.topics.t3}</ListItem>
            <ListItem>{experienceCenterPtBr.t7.topics.t4}</ListItem>
            <ListItem>{experienceCenterPtBr.t7.topics.t5}</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h3">{experienceCenterPtBr.st8}</Heading>
          <Text>{experienceCenterPtBr.t8.p1}</Text>
          <Text>{experienceCenterPtBr.t8.p2}</Text>
          <Text>{experienceCenterPtBr.t8.p3}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ExperienceCenter;
