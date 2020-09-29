import React from "react";
import { View } from "react-native";

import SocialLogin from "../components/SocialLogin";
import { Button, Container, Text } from "../../components";
import { Box } from "../../components/Theme";

const Login = () => {
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
  return (
    <Container {...{ footer }}>
      <View />
    </Container>
  );
};

export default Login;
