import { Button, Flex, Heading, Text, Image, Box } from '@chakra-ui/react';

const projects = [
  {
    title: 'Sistema Mobile',
    images: '',
    tags: [1, 2, 3, 4]
  }
];

const tags = [
  { id: 1, name: 'UX Design' },
  { id: 2, name: 'UI Design' },
  { id: 3, name: 'Em Produção' },
  { id: 4, name: 'Em Construção' },
  { id: 5, name: 'Protótipo' },
  { id: 6, name: 'Em Lojas' }
];

const Projects = () => {
  return (
    <Flex flexDirection="column" w="full" height={523} p="0 60px 24px" gap={24}>
      <Flex h="407px" bg="#fff"></Flex>
    </Flex>
  );
};

export default Projects;
