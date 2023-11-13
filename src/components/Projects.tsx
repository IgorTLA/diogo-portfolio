import { useState } from 'react';

import image7 from '../../public/images/appCtismartX.png';
import capa1 from '../../public/images/capa-appcitx.png';
import capa2 from '../../public/images/capa-centroxp.png';
import image8 from '../../public/images/centroXP.png';
import image1 from '../../public/images/projects/image-project1.png';
import image2 from '../../public/images/projects/image-project2.png';
import image3 from '../../public/images/projects/image-project3.png';
import image4 from '../../public/images/projects/image-project4.png';
import image5 from '../../public/images/projects/image-project5.png';
import image6 from '../../public/images/projects/image-project6.png';
import image9 from '../../public/images/Status.png';

import { Card, Flex, Heading, Image, Tag, TagLabel } from '@chakra-ui/react';
import Router from 'next/router';

const projects: Project[] = [
  {
    title: 'Central IT Mobile',
    route: '/CentralITMobile',
    image: <Image src={image1.src} alt="Central IT Mobile" />,
    tags: [1, 2, 5, 7],
    content: {
      imageHeader: <Image src={capa1.src} alt="Central IT Mobile" />,
      about: <Image src={image7.src} />
    }
  },
  {
    title: 'Centro de Experiência',
    route: '/ExperienceCenter',
    image: <Image src={image2.src} alt="Centro de Experiência" />,
    tags: [1, 2, 5, 3],
    content: {
      imageHeader: <Image src={capa2.src} alt="Centro de Experiência" />,
      about: <Image src={image8.src} />
    }
  },
  {
    title: 'Sistema de Ações Fiscais',
    image: <Image src={image3.src} alt="Sistema de Ações Fiscais" />,
    tags: [1, 2, 5, 4],
    content: undefined
  },
  {
    title: 'Ouvidoria 156',
    image: <Image src={image4.src} alt="Ouvidoria 156" />,
    tags: [1, 2, 5, 4],
    content: undefined
  },
  {
    title: 'Dashboard Controle de times',
    image: <Image src={image5.src} alt="Dashboard Controle de Equipes" />,
    tags: [1, 2, 5, 4],
    content: undefined
  },
  {
    title: 'Dashboard CRM',
    image: <Image src={image6.src} alt="Dashboard CRM" />,
    tags: [1, 2, 5, 4],
    content: undefined
  }
];

const tags = [
  { id: 1, name: 'UX Design', color: '#B1A63C' },
  { id: 2, name: 'UI Design', color: '#EB8C1C' },
  { id: 3, name: 'Em Produção', color: '#059A51' },
  { id: 4, name: 'Em Construção', color: '#EF2C2D' },
  { id: 5, name: 'Interativo', color: '#297ACC' },
  { id: 6, name: 'Em Lojas', color: '#B1A63C' }
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState<Project>();

  const handleOpenModal = (project: Project) => {
    if (project.route) {
      setCurrentProject(project);
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
            _hover={
              project.content && {
                _after: {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.1)'
                }
              }
            }
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
              <Image src={image9.src} alt="Status" />
            )}
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};

export default Projects;
