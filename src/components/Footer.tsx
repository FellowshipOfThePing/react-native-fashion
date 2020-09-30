import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Box, Text } from ".";
import SocialLogin from "../Authentication/components/SocialLogin";

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({ onPress, title, action }: FooterProps) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center" justifyContent="flex-end" marginTop="xl">
        <TouchableWithoutFeedback {...{ onPress }}>
          <Text variant="button" color="white" marginBottom="s">
            <Text>{`${title} `}</Text>
            <Text color="primary">{action}</Text>
          </Text>
        </TouchableWithoutFeedback>
      </Box>
    </>
  );
};

export default Footer;
