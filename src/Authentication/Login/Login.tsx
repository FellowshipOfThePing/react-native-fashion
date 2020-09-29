import React from "react";
import { View } from "react-native";

import SocialLogin from "../components/SocialLogin";
import { Button, Container, Text } from "../../components";
import { Box } from "../../components/Theme";
import TextInput from "../components/Form";
import Checkbox from "../components/Form/Checkbox";

const footer = (
  <>
    <SocialLogin />
    <Button variant="transparent" onPress={() => alert("SignUp!")}>
      <Box flexDirection="row">
        <Text variant="button" color="white">
          Don't have an account?
        </Text>
        <Text variant="button" color="primary" marginLeft="s">
          Sign Up here
        </Text>
      </Box>
    </Button>
  </>
);

const Login = () => {
  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>
        <Box marginBottom="m">
          <TextInput icon="mail" placeholder="Enter your email" />
        </Box>
        <TextInput icon="lock" placeholder="Enter your password" />
        <Box flexDirection="row" justifyContent="space-between">
          <Checkbox label="Remember me" />
          <Button variant="transparent" onPress={() => true}>
            <Text color="primary">Forgot Password?</Text>
          </Button>
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            onPress={() => true}
            label="Log into your account"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
