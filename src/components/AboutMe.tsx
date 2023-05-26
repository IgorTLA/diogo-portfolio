import { AiOutlineSend, AiOutlineDownload } from 'react-icons/ai';

import Avatar from '../../public/images/image1.png';
import waveEdge from '../../public/images/Vector.png';

import { Button, Flex, Heading, Text, Image } from '@chakra-ui/react';

const AboutMe = () => {
  return (
    <Flex flexDirection={'column'} w="full" height={523}>
      <Flex
        bg="#F3F3F3"
        flexDirection="column"
        justifyContent="space-between"
        p={'32px 100px 16px'}
      >
        <Flex justifyContent="space-between">
          <Flex flexDirection="column" w={'60%'}>
            <Heading mb="16px" fontSize="40">
              Olá! Sou o Diogo Rother
            </Heading>
            <Heading mb="22px" fontSize="48" color="#335CD7">
              UX/UI & Product Designer
            </Heading>
            {/* <Container> */}
            <Text fontSize="22" fontWeight="400">
              Especializado em Design da Experiência do Usuário. Sou uma pessoa
              ágil que adora encarar novos desafios.{'  '}
            </Text>
            <Text fontSize="22" fontWeight="400">
              Aprendi em minha trajetória que não basta construir telas bonitas,
              devemos nos aprofundar em quais são os problemas dos nossos
              usuários e qual é a melhor forma de resolvê-los.
            </Text>
          </Flex>
          <Flex>
            <Image
              bg="#C6C6C6"
              w={300}
              h={300}
              borderRadius={150}
              src={Avatar.src}
              alt="Diogo Rother"
              boxShadow={'0px 0px 6px #00000040'}
            />
          </Flex>
        </Flex>
        <Flex>
          <Button
            bg="#fff"
            size="lg"
            p="16px"
            mr="32px"
            fontSize={16}
            fontWeight="700"
            boxShadow={'0px 0px 6px #00000040'}
            leftIcon={<AiOutlineDownload size={24} />}
          >
            Baixe meu Currículo
          </Button>
          <Button
            bg="#545AD7"
            color="#fff"
            size="lg"
            p="16px"
            fontSize={16}
            fontWeight="700"
            boxShadow={'0px 0px 6px #00000040'}
            leftIcon={<AiOutlineSend fontWeight={'900'} size={24} />}
            _hover={{ bg: '#444BD3' }}
          >
            Entre em Contato
          </Button>
        </Flex>
      </Flex>
      <Image
        bg="transparent"
        w={'full'}
        h={'100%'}
        src={waveEdge.src}
        rotate={180}
      />
    </Flex>
  );
};

export default AboutMe;
