import { AiOutlineSend, AiOutlineDownload } from 'react-icons/ai';

import { Icon, Button, Flex, Heading, Text, Image } from '@chakra-ui/react';

const Services = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      p={'32px 100px 16px'}
    >
      <Flex justifyContent="space-between">
        <Flex flexDirection="column" w={'60%'}>
          <Heading mb="16px" fontSize="40">
            Olá! Sou o Diogo Rother
          </Heading>
          <Heading mb="24px" fontSize="48" color="#335CD7">
            UX/UI & Product Designer
          </Heading>
          {/* <Container> */}
          <Text fontSize="24" textAlign="justify">
            Especializado em Design da Experiência do Usuário. Sou uma pessoa
            ágil que adora encarar novos desafios.
          </Text>
          <Text fontSize="24" textAlign="justify">
            Aprendi em minha trajetória que não basta construir telas bonitas,
            devemos nos aprofundar em quais são os problemas dos nossos usuários
            e qual é a melhor forma de resolvê-los.
          </Text>
        </Flex>
        <Flex>
          <Image
            w={300}
            h={300}
            borderRadius={150}
            src="https://bit.ly/dan-abramov"
            alt="Diogo Rother"
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
          boxShadow={'0px 4px 20px #00000040'}
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
          boxShadow={'0px 4px 20px #00000040'}
          leftIcon={<AiOutlineSend fontWeight={'900'} size={24} />}
        >
          Entre em Contato
        </Button>
      </Flex>
    </Flex>
  );
};

export default Services;
