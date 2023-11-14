import status from '../../public/images/status.png';

import { Card, Flex, Heading, Image, Tag, TagLabel } from '@chakra-ui/react';
import { projects, tags } from 'constants/projects';
import Router from 'next/router';

const Projects = () => {
  const handleOpenModal = (project: Project) => {
    if (project.route) {
      Router.push(project.route);
    }
  };

  return (
    <Flex
      flexDirection="column"
      align="center"
      w="full"
      height="hug"
      p="0 24px 24px"
      px={{ base: '60px', sm: '100px' }}
    >
      <Heading mb="16px" fontSize="36px" fontWeight="700" color="#335CD7">
        Projetos
      </Heading>
      <Flex wrap="wrap" justify="center" gap={'32px'}>
        {projects.map((project: Project, index: number) => (
          <Card
            key={index}
            direction="column"
            overflow="hidden"
            variant="outline"
            h="407px"
            w={{ base: '400px', sm: '400px' }}
            bg="#fff"
            align="center"
            cursor={project.content ? 'pointer' : ''}
            boxShadow="0px 2px 16px rgba(0, 0, 0, 0.1)"
            _hover={{
              _after: {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.1)'
              }
            }}
            onClick={() => handleOpenModal(project)}
          >
            {project.image}
            <Heading paddingY="24px" fontSize="24px" fontWeight="700">
              {project.title}
            </Heading>
            <Flex gap="16px" pb="8px">
              {tags.map((tag, index) => {
                if (project.tags.includes(tag.id))
                  return (
                    <Tag
                      key={index}
                      w="fit-content"
                      h="fit-content"
                      bg="#fff"
                      color={tag.color}
                      border={`1px solid ${tag.color}`}
                      p="8px"
                      boxShadow="0px 0px 6px rgba(0, 0, 0, 0.25)"
                    >
                      <TagLabel fontWeight="700" fontSize="12px">
                        {tag.name}
                      </TagLabel>
                    </Tag>
                  );
              })}
            </Flex>
            {project.title == 'Central IT Mobile' && (
              <Image src={status.src} alt="Status" />
            )}
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};

export default Projects;
