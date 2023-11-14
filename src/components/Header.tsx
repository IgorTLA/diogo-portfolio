import { Box, Button, Flex, HStack, Heading } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import Router from 'next/router';

interface HeaderProps {
  onBack?: boolean;
  title?: string;
  sections?: string[];
}

const Header: React.FC<HeaderProps> = ({ onBack, title, sections }) => {
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
            onClick={() => Router.push('/')}
          >
            Voltar
          </Button>
        )}
        <Heading color="#fff" fontSize="28px" fontWeight="600">
          {title}
        </Heading>
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
