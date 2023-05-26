import {
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  UnorderedList
} from '@chakra-ui/react';

interface HeaderProps {
  sections: string[];
}

const Header: React.FC<HeaderProps> = ({ sections }) => {
  const handleScrollToElement = (sections: string) => () => {
    const element = document.getElementById(sections);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box bg="#335CD7" w="full" h="76px" p="16px 100px">
      <Flex align="center" justify="space-between">
        <Heading color="#fff" fontSize="28px" fontWeight="600">
          Diogo Rother
        </Heading>
        <UnorderedList display="flex" listStyleType="none" ml={0} p={0}>
          {sections.map((section, index) => (
            <ListItem key={index} ml={4}>
              <Button
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
            </ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </Box>
  );
};

export default Header;
