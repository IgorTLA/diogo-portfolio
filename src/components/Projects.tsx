import status from '../../public/images/status.png';

import { Card, Flex, Heading, Image, Tag, TagLabel } from '@chakra-ui/react';
import Router, { useRouter } from 'next/router';

import image1 from '../../public/images/projects/image-project1.png';
import image2 from '../../public/images/projects/image-project2.png';
import image3 from '../../public/images/projects/image-project3.png';
import image4 from '../../public/images/projects/image-project4.png';
import image5 from '../../public/images/projects/image-project5.png';
import image6 from '../../public/images/projects/image-project6.png';

import { projectsEnUs } from 'constants/locale/en-us';
import { useEffect, useState } from 'react';
import { projectsPtBr } from '../constants/locale/pt-br';

const Projects = () => {
  const router = useRouter();
  const [language, setLanguage] = useState(projectsPtBr);

  useEffect(() => {
    setLanguage(router.locale === 'pt-BR' ? projectsPtBr : projectsEnUs);
  }, [router.locale]);

  const handleOpenPage = (project: Project) => {
    if (project.url) {
      Router.push(project.url);
    }
  };

  const projects: Project[] = [
    {
      title: language.card.t1,
      url: '/CentralITMobile',
      image: <Image src={image1.src} alt={language.card.t1} />,
      tags: [1, 2, 5, 7]
    },
    {
      title: language.card.t2,
      url: '/ExperienceCenter',
      image: <Image src={image2.src} alt={language.card.t2} />,
      tags: [1, 2, 5, 3]
    },
    {
      title: language.card.t3,
      image: <Image src={image3.src} alt={language.card.t3} />,
      tags: [1, 2, 5, 4]
    },
    {
      title: language.card.t4,
      image: <Image src={image4.src} alt={language.card.t4} />,
      tags: [1, 2, 5, 4]
    },
    {
      title: language.card.t5,
      image: <Image src={image5.src} alt={language.card.t5} />,
      tags: [1, 2, 5, 4]
    },
    {
      title: language.card.t6,
      image: <Image src={image6.src} alt={language.card.t6} />,
      tags: [1, 2, 5, 4]
    }
  ];

  const tags = [
    { id: 1, name: language.tags.tag1, color: '#B1A63C' },
    { id: 2, name: language.tags.tag2, color: '#EB8C1C' },
    { id: 3, name: language.tags.tag3, color: '#059A51' },
    { id: 4, name: language.tags.tag4, color: '#EF2C2D' },
    { id: 5, name: language.tags.tag5, color: '#297ACC' },
    { id: 6, name: language.tags.tag6, color: '#B1A63C' }
  ];

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
        {language.title}
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
            cursor={project.url ? 'pointer' : ''}
            boxShadow="0px 2px 16px rgba(0, 0, 0, 0.1)"
            _hover={
              project.url && {
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
            onClick={() => handleOpenPage(project)}
          >
            {project.image}
            <Heading paddingY="24px" fontSize="24px" fontWeight="700">
              {project.title}
            </Heading>
            <Flex gap="8px" pb="8px">
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
            {project.title === language.card.t1 && (
              <Image src={status.src} alt="Status" />
            )}
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};

export default Projects;
