import {
  Box,
  Stack,
  VStack,
  Heading,
  HStack,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'white'} minH={'40'} p="16">
      <Stack direction={['column', 'row']}>
        <VStack w={'full'} alignItems={'stretch'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here....."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="transparent"
            />
            <Button
              variant={'ghost'}
              colorScheme="purple"
              p={'0'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            Video Hub
          </Heading>
          <Text>All rights recevied</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'purple'}>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <a target="_blank" href="https://youtube.com" rel="noreferrer">
              Instagram
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'purple'}>
            <a target="_blank" href="https://youtube.com" rel="noreferrer">
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
