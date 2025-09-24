import { colors } from "@/constants/colors";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export const AnimatedTabLabel = ({
  focused,
  title,
}: {
  focused: boolean;
  title: string;
}) => {
  const scale = useSharedValue(focused ? 1 : 0);
  const opacity = useSharedValue(focused ? 1 : 0);

  useEffect(() => {
    scale.value = withTiming(focused ? 1 : 0, { duration: 200 });
    opacity.value = withTiming(focused ? 1 : 0, { duration: 200 });
  }, [focused]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,

    height: focused ? "auto" : 0,
    fontSize: 10,
    color:  colors.red ,
    marginTop: focused ? 5 : 0,
  }));

  return <Animated.Text style={animatedStyle}>{title}</Animated.Text>;
};
