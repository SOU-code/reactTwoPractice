import React from 'react';
import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingStyle = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH={'100vh'} maxW={'container.xl'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          borderBottom={'2px solid'}
          w={'fit-content'}
          margin={'auto'}
        >
          Services
        </Heading>
        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Img src={img5} filter={'hue-rotate(-130deg)'} h={['40', '400']} />
          <Text
            letterSpacing={'widest'}
            p={['4', '16']}
            lineHeight={'190%'}
            textAlign={'center'}
            maxW={'container.md'}
            mx={'auto'}
          >
            {/* Your text content */}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    infiniteLoop
    autoPlay
    interval={1000}
    showArrows={false}
    showThumbs={false}
    showStatus={false}
  >
    <Box h={['500px', '100vh']} w={'full'}>
      <Img src={img1} h={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingStyle}>
        Watch The Future
      </Heading>
    </Box>
    <Box h={['500px', '100vh']} w={'full'}>
      <Img src={img2} h={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingStyle}>
        Future Is Gaming
      </Heading>
    </Box>
    <Box h={['500px', '100vh']} w={'full'}>
      <Img src={img3} h={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingStyle}>
        Color is Love
      </Heading>
    </Box>
    <Box h={['500px', '100vh']} w={'full'}>
      <Img src={img4} h={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingStyle}>
        Night Is Beautiful
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
