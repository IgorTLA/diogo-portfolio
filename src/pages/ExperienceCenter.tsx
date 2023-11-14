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

import { experienceCenter } from 'constants/locale/pt-br';

const ExperienceCenter = () => {
  return (
    <Flex bg="#fff" flexDirection="column" w="full" h="full">
      <Header title={experienceCenter.title} onBack={true} />
      <Flex p={'32px 16vw'} flexDirection="column">
        <Image src={experienceCenter.cover.src} alt={experienceCenter.title} />
        <Box>
          <Heading as="h3">{experienceCenter.st1}</Heading>
          <Text>{experienceCenter.t1}</Text>
        </Box>
        <Box>
          <Heading as="h3">{experienceCenter.st2}</Heading>
          <Text>{experienceCenter.t2}</Text>
        </Box>
        <Box>
          <Heading as="h3">{experienceCenter.st3}</Heading>
          <HStack spacing={1}>
            <Text as="b">{experienceCenter.t3.p1.name}</Text>
            <Text>{experienceCenter.t3.p1.description}</Text>
          </HStack>
          <HStack spacing={1}>
            <Text as="b">{experienceCenter.t3.p2.name}</Text>
            <Text>{experienceCenter.t3.p2.description}</Text>
          </HStack>
          <HStack spacing={1}>
            <Text as="b">{experienceCenter.t3.p3.name}</Text>
            <Text>{experienceCenter.t3.p3.description}</Text>
          </HStack>
        </Box>
        <Box>
          <Heading as="h3">{experienceCenter.st4}</Heading>
          <Text>{experienceCenter.t4}</Text>
        </Box>
        <Box>
          <Heading as="h3">{experienceCenter.st5}</Heading>
          <Box>
            <Text as="b">{experienceCenter.t5.p1.name}</Text>
            <Text>{experienceCenter.t5.p1.description}</Text>
          </Box>
          <Box>
            <Text as="b">{experienceCenter.t5.p2.name}</Text>
            <Text>{experienceCenter.t5.p2.description.t1}</Text>
            <Text>{experienceCenter.t5.p2.description.t2}</Text>
            <UnorderedList>
              <ListItem>
                {experienceCenter.t5.p2.description.topics.t1}
              </ListItem>
              <ListItem>
                {experienceCenter.t5.p2.description.topics.t2}
              </ListItem>
              <ListItem>
                {experienceCenter.t5.p2.description.topics.t3}
              </ListItem>
              <ListItem>
                {experienceCenter.t5.p2.description.topics.t4}
              </ListItem>
            </UnorderedList>
            <Image
              src={experienceCenter.t5.p2.description.uxAnalytics.src}
              alt={experienceCenter.st5}
            />
          </Box>
          <Box>
            <Text as="b">{experienceCenter.t5.p3.name}</Text>
            <Text>{experienceCenter.t5.p3.description}</Text>
          </Box>
          <Box>
            <Text as="b">{experienceCenter.t5.p4.name}</Text>
            <Text>{experienceCenter.t5.p4.description}</Text>
          </Box>
        </Box>
        <Box>
          <Heading as="h3">{experienceCenter.st6}</Heading>
          <Box>
            <Text as="b">{experienceCenter.t6.p1.name}</Text>
            <Text>{experienceCenter.t6.p1.description}</Text>
            {experienceCenter.t6.p1.images.map((item) => (
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
            <Text as="b">{experienceCenter.t6.p2.name}</Text>
            <Text>{experienceCenter.t6.p2.description}</Text>
          </Box>
          <Box>
            <Text as="b">{experienceCenter.t6.p3.name}</Text>
            <Text>{experienceCenter.t6.p3.description}</Text>
          </Box>
          <Box>
            <Text as="b">{experienceCenter.t6.p4.name}</Text>
            <Text>{experienceCenter.t6.p4.description}</Text>
          </Box>
          <Box>
            <Text as="b">{experienceCenter.t6.p5.name}</Text>
            <Text>{experienceCenter.t6.p5.description}</Text>
          </Box>
        </Box>
        <Box>
          <Heading as="h3">{experienceCenter.st7}</Heading>
          <UnorderedList>
            <ListItem>{experienceCenter.t7.topics.t1}</ListItem>
            <ListItem>{experienceCenter.t7.topics.t2}</ListItem>
            <ListItem>{experienceCenter.t7.topics.t3}</ListItem>
            <ListItem>{experienceCenter.t7.topics.t4}</ListItem>
            <ListItem>{experienceCenter.t7.topics.t5}</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h3">{experienceCenter.st8}</Heading>
          <Text>{experienceCenter.t8.p1}</Text>
          <Text>{experienceCenter.t8.p2}</Text>
          <Text>{experienceCenter.t8.p3}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ExperienceCenter;
