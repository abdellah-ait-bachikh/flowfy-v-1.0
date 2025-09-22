import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // ✅ Expo gradient
import { useTranslation } from 'react-i18next';
import { colors as custemColors } from "@/constants/colors";

type LinearGradientCmpProps = {
  children: React.ReactNode;
  colors:  readonly [string, string, ...string[]]; // allow custom colors
  style?: StyleProp<ViewStyle>; // allow custom styling
  start?: { x: number; y: number }; // optional gradient start
  end?: { x: number; y: number };   // optional gradient end
};

const LinearGradientCmp: React.FC<LinearGradientCmpProps> = ({
  children,
  colors , // default gradient
  style,
  start = { x: 0, y: 0 },
  end = { x: 0, y: 1 },
}) => {
  const { i18n } = useTranslation();
  const rtl = i18n.language === "ar"; // example RTL usage if needed

  return (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
  
      style={[{ flex: 1 }, style]} // allow overriding styles
    >
      {children}
    </LinearGradient>
  );
};

export default LinearGradientCmp;
