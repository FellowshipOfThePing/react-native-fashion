import React from "react";
import { Animated, View } from "react-native";

interface DotProps {
  index: number;
  currentIndex: Animated.Node<number>;
}

const Dot = ({ index, currentIndex }: DotProps) => {
  let opacity = currentIndex.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: "CLAMP",
  });
  let scale = currentIndex.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: "CLAMP",
  });
  return (
    <Animated.View
      style={{
        backgroundColor: "#2cb9b0",
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
        opacity,
        transform: [{ scale }],
      }}
    ></Animated.View>
  );
};

export default Dot;
