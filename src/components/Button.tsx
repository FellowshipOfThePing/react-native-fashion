import { useTheme } from "@shopify/restyle";
import React from "react";
import { View, StyleSheet } from "react-native";

import { RectButton } from "react-native-gesture-handler";
import { Text } from "./Theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ButtonProps {
  variant: "default" | "primary" | "transparent";
  label: string;
  onPress: () => void;
}

const Button = ({ label, onPress, variant }: ButtonProps) => {
  const theme = useTheme();
  const backgroundColor =
    variant === "primary"
      ? theme.colors.primary
      : variant === "transparent"
      ? "transparent"
      : theme.colors.grey;
  const color =
    variant === "primary" ? theme.colors.white : theme.colors.button;
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="button" style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
