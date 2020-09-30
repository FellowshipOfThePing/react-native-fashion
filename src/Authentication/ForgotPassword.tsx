import React, { forwardRef, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TouchableWithoutFeedback } from "react-native";

import { Routes, StackNavigationProps } from "../components/Navigation";
import { Button, Container, Text } from "../components";
import { Box } from "../components/Theme";
import TextInput from "./components/Form";
import Footer from "../components/Footer";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = ({
  navigation,
}: StackNavigationProps<Routes, "ForgotPassword">) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: ForgotPasswordSchema,
      initialValues: {
        email: "",
      },
      onSubmit: () => navigation.navigate("PasswordChanged"),
    }
  );
  const footer = <Footer title="" action="" onPress={() => true} />;
  return (
    <Container footer={footer}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Forgot password?
        </Text>
        <Text variant="body" textAlign="center" marginBottom="xl">
          Enter the email address associated with your account
        </Text>
        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => true}
            />
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Reset password"
            />
          </Box>
          <Box alignItems="center" justifyContent="flex-end" marginTop="l">
            <TouchableWithoutFeedback>
              <Text variant="body">
                <Text>Don't work?</Text>
                <Text color="primary"> Try another way</Text>
              </Text>
            </TouchableWithoutFeedback>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
