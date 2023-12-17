import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack m={'auto'} w={['full', '96']} my={'16'} spacing={8} alignItems={'stretch'}>
          <Heading textAlign={'center'}>Video Hub</Heading>
          <Avatar alignSelf={'center '} boxSize={'32'}/>
          <Input
            type="text"
            placeholder="Name"
            required
            focusBorderColor="purple.500"
          />
          <Input
            type="email"
            placeholder="Email"
            required
            focusBorderColor="purple.500"
          />
          <Input
            type="password"
            placeholder="Password"
            required
            focusBorderColor="purple.500"
          />
          <Button colorScheme="purple" type="submit" w={'full'}>
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already Have an account!{' '}
            <Button colorScheme="purple" variant={'link'}>
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
