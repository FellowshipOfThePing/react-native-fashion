import React, { useRef } from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  Animated,
  Image,
} from "react-native";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";
import { useTheme } from "../../components";
import { Theme, makeStyles } from "../../components/Theme";
import { Routes, StackNavigationProps } from "../../components/Navigation";

const { width } = Dimensions.get("window");

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: "hidden",
  },
}));

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: "#BFEAF5",
    picture: {
      src: require("../assets/1.png"),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    color: "#BEECC4",
    picture: {
      src: require("../assets/2.png"),
      width: 2791,
      height: 3744,
    },
  },
  {
    title: "Eccentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing every day",
    color: "#FFE4D9",
    picture: {
      src: require("../assets/3.png"),
      width: 2738,
      height: 3244,
    },
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    picture: {
      src: require("../assets/4.png"),
      width: 1757,
      height: 2551,
    },
  },
];

export const assets = slides.map((slide) => slide.picture.src);
const Onboarding = ({
  navigation,
}: StackNavigationProps<Routes, "Onboarding">) => {
  const styles = useStyles();
  const theme = useTheme();
  const scroll = useRef(null);
  let x = new Animated.Value(0);
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { x } } }], {
    useNativeDriver: false,
  });
  let backgroundColor = x.interpolate({
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map(({ picture }, index) => {
          const opacity = x.interpolate({
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: "clamp",
          });
          return (
            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
              <Image
                source={picture.src}
                style={{
                  width: width - theme.borderRadii.xl,
                  height:
                    ((width - theme.borderRadii.xl) * picture.height) /
                    picture.width,
                }}
              />
            </Animated.View>
          );
        })}

        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          disableIntervalMomentum
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot
                key={index}
                currentIndex={Animated.divide(x, width)}
                {...{ index, x }}
              />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: Animated.multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <Subslide
                  key={index}
                  last={index === slides.length - 1}
                  {...{ subtitle, description }}
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else {
                      scroll.current?.scrollTo({
                        x: width * (index + 1),
                        animated: true,
                      });
                    }
                  }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
