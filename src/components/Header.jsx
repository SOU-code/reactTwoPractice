import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button
        colorScheme={'purple'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        w={'10'}
        h={'10'}
        p={'0'}
        zIndex={'overlay'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Hub</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/'}>Home</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/upload'}>Upload Videos</Link>
              </Button>
            </VStack>
            <HStack pos={'fixed'} w={'full'} justifyContent={'space-evenly'} left={0} bottom={10}>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
              >
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={'outline'}
                colorScheme={'purple'}
              >
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Header;
