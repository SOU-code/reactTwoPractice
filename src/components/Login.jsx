import React from 'react';
import {
  Button,
  Container,
  Heading,
  Input,
  Link,
  VStack,
  Text,
} from '@chakra-ui/react';
const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack m={'auto'} w={['full', '96']} my={'16'} spacing={8} alignItems={'stretch'}>
          <Heading>Welcome Back</Heading>
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
          <Button alignSelf={'flex-end'} variant={'link'}>
            <Link top={'/forgetpassword'}>Forget Password</Link>
          </Button>
          <Button colorScheme="purple" type="submit">
            Log In
          </Button>
          <Text>
            New User?{' '}
            <Button colorScheme="purple" variant={'link'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
