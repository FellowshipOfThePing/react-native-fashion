import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Routes, StackNavigationProps } from "../components/Navigation";
import { Button, Container, Text } from "../components";
import { Box } from "../components/Theme";
import CloseButton from "../components/CloseButton";

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, "PasswordChanged">) => {
  return (
    <Container
      footer={<CloseButton onPress={() => navigation.navigate("Login")} />}
    >
      <Box
        height={110}
        justifyContent="flex-end"
        alignItems="center"
        marginTop="xl"
        paddingTop="xl"
      >
        <Text color="primary">
          <Icon name="check" size={45} />
        </Text>
      </Box>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Your password was successfully changed
        </Text>
        <Text variant="body" textAlign="center">
          Close this window and login again
        </Text>
        <Box>
          <Box alignItems="center" marginTop="xl">
            <Button
              variant="primary"
              onPress={() => navigation.navigate("Login")}
              label="Login again"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
