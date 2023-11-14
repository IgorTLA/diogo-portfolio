import { useRef } from 'react';
import { AiOutlineDownload, AiOutlineSend } from 'react-icons/ai';

import Avatar from '../../public/images/image1.png';
import waveEdge from '../../public/images/Vector.png';

import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { AboutMePtBr } from '../constants/locale/pt-br';

const AboutMe = () => {
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const handleDownload = async () => {
    const fileUrl =
      'https://drive.google.com/file/d/1nuxokynKUt5pJ_hfF07GOybIC5DiLOe-/view';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Currículo-Diogo-Rother.pdf';
    link.click();
  };

  return (
    <Flex flexDirection={'column'} w="full" height="hug">
      <Flex
        bg="#F3F3F3"
        flexDirection="column"
        justifyContent="space-between"
        p={'32px 100px 16px'}
      >
        <Flex justifyContent="space-between">
          <Flex flexDirection="column" w={'60%'}>
            <Heading mb="16px" fontSize="40">
              {AboutMePtBr.title}
            </Heading>
            <Heading mb="22px" fontSize="48" color="#335CD7">
              {AboutMePtBr.subTitle}
            </Heading>
            {/* <Container> */}
            <Text fontSize="22" fontWeight="400">
              {AboutMePtBr.description.p1}
              {'  '}
            </Text>
            <Text fontSize="22" fontWeight="400">
              {AboutMePtBr.description.p2}
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
            onClick={handleDownload}
          >
            {AboutMePtBr.actions.b1}
          </Button>
          <a ref={downloadRef} style={{ display: 'none' }}></a>
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
            {AboutMePtBr.actions.b2}
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
