import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Heading,
  Image
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import brazil from '../../public/images/brazil.png';
import usa from '../../public/images/usa.png';

interface HeaderProps {
  onBack?: boolean;
  title?: string;
  url: string;
  sections?: string[];
}

const Header: React.FC<HeaderProps> = ({ onBack, title, url, sections }) => {
  const router = useRouter();
  const handleChangeLocale = (lang: string) => {
    if (lang) {
      router.push(url, url, { locale: lang === 'pt' ? 'pt-BR' : 'en-US' });
    }
  };

  const handleScrollToElement = (sections: string) => () => {
    const element = document.getElementById(sections);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box bg="#335CD7" w="full" h="76px" p="16px 100px">
      <Flex
        align="center"
        justify={onBack ? 'flex-start' : 'space-between'}
        gap={onBack ? 8 : 0}
      >
        {onBack && (
          <Button
            bg="transparent"
            color="#fff"
            fontSize={16}
            fontWeight="600"
            border={'1px solid #fff'}
            alignContent={'center'}
            size="sm"
            _hover={{
              bg: '#4167D9',
              boxShadow: '#0000001a 0px 4px 12px'
            }}
            leftIcon={<ChevronLeftIcon boxSize={6} />}
            onClick={() => router.push('/')}
          >
            {router.locale === 'pt-BR' ? 'Voltar' : 'Back'}
          </Button>
        )}
        <Flex gap={'16px'}>
          <Heading color="#fff" fontSize="28px" fontWeight="600">
            {title}
          </Heading>
          <ButtonGroup size={'sm'} isAttached variant="outline" border={0}>
            <Button
              bg={router.locale === 'pt-BR' ? '#fff' : '#C6C6C6'}
              leftIcon={
                <Image boxSize={8} src={brazil.src} alt="Brazil" m={0} />
              }
              onClick={() => handleChangeLocale('pt')}
            >
              PT
            </Button>
            <Button
              bg={router.locale === 'en-US' ? '#fff' : '#C6C6C6'}
              leftIcon={<Image boxSize={6} src={usa.src} alt="USA" m={0} />}
              onClick={() => handleChangeLocale('en')}
            >
              EN
            </Button>
          </ButtonGroup>
        </Flex>
        {!onBack && (
          <HStack spacing="24px">
            {sections &&
              sections.map((section, index) => (
                <Button
                  key={index}
                  bg="#335CD7"
                  color="#fff"
                  onClick={handleScrollToElement(section)}
                  fontSize={18}
                  fontWeight="600"
                  size="md"
                  _hover={{
                    bg: '#4167D9',
                    boxShadow: '#0000001a 0px 4px 12px'
                  }}
                >
                  {section}
                </Button>
              ))}
          </HStack>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
