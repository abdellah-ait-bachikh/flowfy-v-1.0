// components/ui/AnimatedTabItem.tsx
import { colors } from "@/constants/colors";
import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type Props = {
  focused: boolean;
  title: string;
  Icon: any;
  iconProps?: any;
};

export const AnimatedTab = ({ focused, title, Icon, iconProps }: Props) => {
  // Initialize with 0 (unfocused state)
  const textScale = useSharedValue(0);
  const textOpacity = useSharedValue(0);
  const iconTranslateY = useSharedValue(0);

  useEffect(() => {
    // Use withTiming like your working example
    textScale.value = withTiming(focused ? 1 : 0, { duration: 200 });
    textOpacity.value = withTiming(focused ? 1 : 0, { duration: 200 });
    iconTranslateY.value = withTiming(focused ? -5 : 0, { duration: 200 });
  }, [focused]);

  const textStyle = useAnimatedStyle(() => ({
    transform: [{ scale: textScale.value }],
    opacity: textOpacity.value,
    // Add height collapsing like your working example
    height: textScale.value > 0 ? "auto" : 0,
  }));

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: iconTranslateY.value }],
  }));

  return (
    <View style={{ 
      alignItems: "center", 
      justifyContent: "center",
      // Remove fixed height/width to allow natural sizing
    }}>
      <Animated.View style={iconStyle}>
        <Icon 
          {...iconProps} 
          color={focused ? colors.gray : colors.black} 
        />
      </Animated.View>
      <Animated.Text
        style={[
          {
            fontSize: 10,
            color: focused ? colors.gray : colors.black,
            marginTop: 4,
          },
          textStyle,
        ]}
      >
        {title}
      </Animated.Text>
    </View>
  );
};