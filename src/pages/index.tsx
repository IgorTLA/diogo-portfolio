import AboutMe from 'components/AboutMe';
import Header from 'components/Header';
import Projects from 'components/Projects';
import Services from 'components/Services';

import { Box, Flex } from '@chakra-ui/react';

import { menuPtBr } from '../constants/locale/pt-br';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { menuEnUs } from 'constants/locale/en-us';

const HomePage = () => {
  const router = useRouter();
  const [language, setLanguage] = useState(menuPtBr);

  useEffect(() => {
    setLanguage(router.locale === 'pt-BR' ? menuPtBr : menuEnUs);
  }, [router.locale]);
  return (
    <Flex bg="#fff" flexDirection="column" w="full" h="full">
      <Header
        title="Diogo Rother"
        url="/"
        sections={[language.b1, language.b2, language.b3]}
      />
      <Flex id={'AboutMe'}>
        <AboutMe />
      </Flex>
      <Flex id={'Serviços'}>
        <Services />
      </Flex>
      <Box id={'Projetos'}>
        <Projects />
      </Box>
    </Flex>
  );
};

export default HomePage;
