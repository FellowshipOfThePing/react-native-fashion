import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, theme } from "../../../components";

interface TextInputProps extends RNTextInputProps {
  icon: string;
  validator?: (input: string) => boolean;
}

const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon, validator, ...props }: TextInputProps) => {
  const [input, setInput] = useState("");
  const [state, setState] = useState<InputState>(Pristine);
  const reColor: keyof typeof theme.colors =
    state === Pristine ? "text" : state === Valid ? "primary" : "danger";
  const color = theme.colors[reColor];
  const validate = () => {
    return null;
  };
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      height={48}
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
    >
      <Box padding="m">
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          onBlur={validate}
          onChangeText={(text) => setInput(text)}
          {...props}
        />
      </Box>
      {(state === Valid || state === Invalid) && (
        <Box
          borderRadius="m"
          height={SIZE}
          width={SIZE}
          justifyContent="center"
          alignItems="center"
          backgroundColor={state === Valid ? "primary" : "danger"}
        >
          <Icon
            name={state === Valid ? "check" : "x"}
            color="white"
            size={16}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
