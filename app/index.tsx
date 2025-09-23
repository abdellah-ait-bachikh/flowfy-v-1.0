import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import transparent_logo from "@/assets/images/flowfy-bg-transparent-croped.png";
import { colors } from "@/constants/colors";
import { useTranslation } from "react-i18next";
import { useRouter } from "expo-router";
import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AppText from "@/components/AppText";
const index = () => {
  const { t, i18n } = useTranslation("");
  const router = useRouter();
  const [language, setLanguage] = useState(i18n.language || "ar");
  const shineAnim = useRef(new Animated.Value(-1)).current;
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    const loop = () => {
      shineAnim.setValue(-1);
      Animated.timing(shineAnim, {
        toValue: 1,
        duration: 1000, // 1 second
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => loop());
    };
    loop();
  }, [shineAnim]);
  const translateX = shineAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: [-200, 200], // width of the shine effect movement
  });
  const handleChangeLanguage = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={language}
        onValueChange={handleChangeLanguage}
        style={[styles.picker, { top: insets.top }]}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Français" value="fr" />
        <Picker.Item label="العربية" value="ar" />
      </Picker>

      <Image
        source={transparent_logo}
        style={[
          styles.logo,
          { width: screenWidth * 0.9, height: (screenWidth * 0.9) / 4 },
        ]}
      />
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.btn}
        onPress={() => router.push("/(tabs)")}
      >
        <AppText style={styles.btn_text}>
          {t("screens.root.index.explor_app")}
        </AppText>
        <Animated.View
          style={[
            styles.shine,
            {
              transform: [{ translateX }],
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
    position: "relative",
  },
  pickerContainer: {
    width: 150,
  },
  picker: {
    width: 150,
    height: 60,
    position: "absolute",
    color: colors.black,
  },

  logo: { resizeMode: "contain" },
  btn: {
    backgroundColor: colors.yellow,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 20,
    borderColor: colors.light_yellow,
    borderWidth: 3,
    overflow: "hidden",
  },
  btn_text: {
    fontSize: 15,
    color: colors.black,
    letterSpacing: 1,
    fontWeight: "700",
  },
  shine: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 60,
    backgroundColor: colors.gray,
    opacity: 0.5,
    borderRadius: 20,
  },
});
